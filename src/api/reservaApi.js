import axios from 'axios';

const baseURL = "http://localhost:8090/api";

const reservaApi = axios.create({
    baseURL: baseURL
});
//
// // Valor de autenticación en Base64 (Basic Authentication)
// const authHeaderValue = "Basic ZnJvbnRlbmRhcHA6MTIzNDU=";
//
// // Configurar la cabecera de autorización en la instancia de Axios
// reservaApi.defaults.headers.common['Authorization'] = authHeaderValue;


reservaApi.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers = {
            ...config.headers,
            'Bearer Token': token
        };
    }

    return config;
});


export default reservaApi;