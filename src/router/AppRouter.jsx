import {Navigate, Route, Routes} from "react-router-dom";

import {LoginPage} from "../auth/index.js";
import {Reservas} from "../reservas/index.js";
import {useAuthStore} from "../hooks/index.js";
import {useEffect} from "react";
import Usuario from "../usuarios/Usuario.jsx";
import Mesa from "../mesas/Mesa.jsx";
import Imagen from "../comida/Imagen.jsx";
import Comida from "../comida/Comida.jsx";
//! Aqui definiriarn sus rutas
export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();


    useEffect(() => {
        checkAuthToken();
    }, []);


    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? ( //! Si no esta authenticated
                        <>
                            <Route path="/auth/*" element={<LoginPage />} />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={< Comida/>} />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
            }
        </Routes>
    )
}