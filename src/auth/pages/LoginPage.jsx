import Swal from 'sweetalert2';
import {useEffect} from 'react';

import './LoginPage.css';
import {useForm, useAuthStore} from '../../hooks'

const loginFormFields = {
    loginUsername: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerUsername: '',
    registerPassword: '',
    registerPassword2: '',
}


export const LoginPage = () => {

    const {startLogin, errorMessage} = useAuthStore();

    const {loginUsername, loginPassword, onInputChange: onLoginInputChange} = useForm(loginFormFields);
    const {
        registerUsername,
        registerName,
        registerPassword,
        registerPassword2,
        onInputChange: onRegisterInputChange
    } = useForm(registerFormFields);

    const loginSubmit = ( event ) => {
        event.preventDefault();
        console.log(loginUsername, loginPassword);
        startLogin({ username: loginUsername, password: loginPassword });
    }


    useEffect(() => {
        if ( errorMessage !== undefined ) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [errorMessage])


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ loginSubmit }>
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
                    <form>
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
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="username"
                                name="registerUsername"
                                value={registerUsername}
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