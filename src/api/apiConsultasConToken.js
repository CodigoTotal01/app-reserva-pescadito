import axios from 'axios';

const baseURL = "http://localhost:8090/api";

const apiConsultasConToken = axios.create({
    baseURL: baseURL
});

//Obtiene el token y se supone que lo pne en la cabezera de las peticiones, Desconosco si hay un problema con los que no se requiere
apiConsultasConToken.interceptors.request.use(config => {
     const token = localStorage.getItem('token');

     if (token) {
         config.headers['Authorization'] = `Bearer ${token}`;
     }
     return config;
 });


export default apiConsultasConToken;