import axios from 'axios'

const apiClient = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
    headers: {
        Accept: "application/json",
    }
}) 

apiClient.interceptors.response.use((res)=> res, error => {
    console.log("apiClient.interceptors >>>",error);
    return Promise.reject(error)
} );

export default apiClient