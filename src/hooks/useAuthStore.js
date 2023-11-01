import {useDispatch, useSelector} from 'react-redux';
import {authReservaApi} from '../api';
import {clearErrorMessage, onChecking, onLogin, onLogout} from '../store';


export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({username, password}) => {
        dispatch(onChecking());
        try {
            // Valor de autenticación en Base64 (Basic Authentication) - Cliente
            const authHeaderValue = "Basic ZnJvbnRlbmRhcHA6MTIzNDU=";

            // Configurar la cabecera de autorización solo para esta solicitud específica
            const headers = {
                'Authorization': authHeaderValue
            };

            const {data} = await authReservaApi.post('/security/oauth/token', null, {
                headers,
                params: {
                    username,
                    password,
                    grant_type: "password"
                }
            });
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.usuario.nombre, id: data.usuario.id}));

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }


    const startRegister = async ({username, password, enabled, nombre, apellido, email, celular, roles}) => {
        dispatch(onChecking());
        try {
            const {data} = await authReservaApi.post('/usuarios/crear', {
                username, password, enabled, nombre, apellido, email, celular, roles
            });
            //Despues de registrar ingresar automaticamente
            await startLogin({username, password});

        } catch (error) {
            console.log(error)
            dispatch(onLogout('Up! algo salio mal :c'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }


    const checkAuthToken = async () => {
        const refresh_token = localStorage.getItem('refresh_token');
        if (!refresh_token) return dispatch(onLogout());

        try {
            const authHeaderValue = "Basic ZnJvbnRlbmRhcHA6MTIzNDU=";

            const headers = {
                'Authorization': authHeaderValue,
                'Content-Type': 'application/x-www-form-urlencoded' // Establecer el tipo de contenido como x-www-form-urlencoded
            };

            // Construir los datos como x-www-form-urlencoded
            const formData = new URLSearchParams();
            formData.append('grant_type', 'refresh_token');
            formData.append('refresh_token', refresh_token);

            const {data} = await authReservaApi.post('/security/oauth/token', formData.toString(), {
                headers
            });

            localStorage.setItem('token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            localStorage.setItem('token-init-date', new Date().getTime());
            console.log("hola si entre c:")
            dispatch(onLogin({name: data.usuario.nombre, id: data.usuario.id}));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    };

    //! Ojo con el tema de las reservas iria aqui creo la limpiesa
    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }


    return {
        //* Propiedades
        errorMessage,
        status,
        user,
        //* Metodos
        startLogin,
        startLogout,
        startRegister,
        checkAuthToken
    }


}
