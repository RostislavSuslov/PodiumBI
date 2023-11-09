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
        },
        posts: {
            index: (params)=> api.get("posts", {params}),
            show: (id)=> api.get(`posts/${id}`),
        },
        comments: {
            index: (id,params)=> api.get(`posts/${id}/comments`, {params}),
            show: (id)=> api.get(`comments/${id}`),
        },
        users: {
            index: (params)=> api.get("users", {params}),
            show: (id)=> api.get(`users/${id}`),
            todos: {
                index: (id,params)=> api.get(`users/${id}/todos`, {params}),
                show: (id)=> api.get(`todos/${id}`),
            }
        },
    }
}

export default createApiRouter();
/* controller */