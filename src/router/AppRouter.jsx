import {Navigate, Route, Routes} from "react-router-dom";

import {LoginPage} from "../auth/index.js";
import {Reservas} from "../reservas/index.js";
//! Aqui definiriarn sus rutas
export const AppRouter = () => {

    const authStatus = 'not-authenticated';



    if ( authStatus === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                    ? ( //! Si no esta authenticated
                        <>
                            <Route path="/auth/*" element={<LoginPage />} />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<Reservas />} />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
            }
        </Routes>
    )
}