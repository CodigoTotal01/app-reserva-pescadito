import Swal from 'sweetalert2';
import {useEffect} from 'react';

import './LoginPage.css';
import {useForm, useAuthStore} from '../../hooks'

const loginFormFields = {
    loginUsername: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: 'Luna',
    registerLastName: 'Perez Valdivia',
    registerEmail: 'Luna@gmail.com',
    registerCelular: '09878906',
    registerUsername: 'Tortuga',
    registerPassword: '12345',
    registerPassword2: '12345',
}


export const LoginPage = () => {

    const {startLogin, startRegister, checkAuthToken, user, status, errorMessage} = useAuthStore();

    const {loginUsername, loginPassword, onInputChange: onLoginInputChange} = useForm(loginFormFields);
    const {
        registerUsername,
        registerName,
        registerLastName,
        registerEmail,
        registerCelular,
        registerPassword,
        registerPassword2,
        onInputChange: onRegisterInputChange
    } = useForm(registerFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        console.log(loginUsername, loginPassword);
        startLogin({username: loginUsername, password: loginPassword});
    }

    const registerSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== registerPassword2) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return;
        }


        // console.log(registerUsername,
        //     registerName,
        //     registerLastName,
        //     registerEmail,
        //     registerCelular,
        //     registerPassword,
        //     registerPassword2,)
        // return;
        startRegister({
            username: registerUsername,
            password: registerPassword,
            enabled: true,
            nombre: registerName,
            apellido: registerLastName,
            email: registerEmail,
            celular: registerCelular,
            roles: [
                {
                    id: "1",
                    nombre: "ROLE_USER"
                }
            ]
        });
    }

    useEffect(() => {
        console.log(errorMessage)
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [errorMessage])


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Usuario"
                                name="loginUsername"
                                value={loginUsername}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        {/*Nombre*/}
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        {/*Apellido*/}
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name="registerLastName"
                                value={registerLastName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        {/*Username*/}
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="registerUsername"
                                value={registerUsername}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        {/*Email*/}
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        {/*Celular*/}
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Celular"
                                name="registerCelular"
                                value={registerCelular}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>


                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}