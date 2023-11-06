import apiClient from "./apiClient"

const createApiRouter = (api = apiClient)=> {
    return {
        episod: {
            index: (params)=> api.get("episode", {params}),
            show: (id)=> api.get(`episode/${id}`),
            // create: (data)=> api.post("episode", data), 
            // update: (id, data)=> api.put(`episode/${id}`, data),
            // delete: (id)=> api.delete(`episode/${id}`),
        },
        courses: {
            index: (params)=> api.get("courses", {params}),
            show: (id)=> api.get(`courses/${id}`),
        }
    }
}

export default createApiRouter();
/* controller */