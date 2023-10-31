import {useDispatch, useSelector} from 'react-redux';
import {reservaApi} from '../api';
import {clearErrorMessage, onChecking, onLogin, onLogout} from '../store';


export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({username, password}) => {
        dispatch(onChecking);
        try {
            // Valor de autenticación en Base64 (Basic Authentication) - Cliente
            const authHeaderValue = "Basic ZnJvbnRlbmRhcHA6MTIzNDU=";

            // Configurar la cabecera de autorización solo para esta solicitud específica
            const headers = {
                'Authorization': authHeaderValue
            };

            const { data } = await reservaApi.post('/security/oauth/token', null, {
                headers,
                params: {
                    username,
                    password,
                    grant_type: "password"
                }
            });
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.usuario.nombre, id: data.usuario.id }) );

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }


    return {
        //* Propiedades
        errorMessage,
        status,
        user,
        //* Metodos
        startLogin,
    }


}
