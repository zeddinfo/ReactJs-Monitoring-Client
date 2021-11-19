import axios from "axios";
const Api = axios.create({
    baseURL : 'http://192.168.34.6:80/api/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
Api.interceptors.request.use(
    (request) => {
        if(request.data){
            console.log('[REQUEST] -> ', request.url, '[REQUEST DATA] -> ', JSON.stringify(request.data));
            request.data = request.data;
        } else {
            console.log('[REQUEST] -> ', request.url, '[REQUEST WITHOUT DATA] ');
        }
        return request;
    }, 
    (error) => Promise.reject(error),
);  
Api.interceptors.response.use(
    (response) => {
        console.log('[RESPONSE] -> ', response.data);
        return response;
    },
    (error) => {
        let result = {Status : 'E', Message: error};
        return Promise.reject(result);
        
    }
);

export default Api;