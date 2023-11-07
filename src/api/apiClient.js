import axios from 'axios'

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        Accept: "application/json",
    }
}) 

apiClient.interceptors.response.use((res)=> res, error => {
    console.log("apiClient.interceptors >>>",error);
    return Promise.reject(error)
} );


// const apiClient2 = axios.create({
//     baseURL: "https://s.staging.yourcourses.kalyna.dev/api/v1/",
//     headers: {
//         Accept: "application/json",
//     },

// }) 

// console.log(apiClient2.get('courses'));


export default apiClient