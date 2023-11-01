import axios from 'axios';

const baseURL = "http://localhost:8090/api";

const authReservaApi = axios.create({
    baseURL: baseURL
});


// authReservaApi.interceptors.request.use(config => {
//     const token = localStorage.getItem('token');
//
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
// });


export default authReservaApi;