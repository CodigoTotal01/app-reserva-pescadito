import {AppRouter} from "./router/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/index.js";
import {Provider} from "react-redux";
import './styles.css';
function ReservaPescaditoApp() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    )
}

export default ReservaPescaditoApp
