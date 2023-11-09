import {defineStore} from "pinia"
import {ref} from "vue";
import apiRouter from '../api/apiRouter';
import apiClient from '../api/apiClient';
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";
// const storageKey = "users"
// const getUsersStore = ()=> {
//     const itemUsers = localStorage.getItem(storageKey)
//     return itemUsers? JSON.parse(itemUsers) : []
// }

// const setUsersStore = (data) => {
//     localStorage.setItem(storageKey, JSON.stringify(data));
// };



const useAuthStore = defineStore('appAuth',  ()=> {   //'appAuth' unique id. Can't be the same
    const users = ref([])
    const newTaskArr = ref([])
    const isAuth = ref(false);
    const newTask = ref("")
    const usersData = ref(null)
    const profile = ref({
        id: 4,
    })
    const {handler, getData} = useHandleLoadingAndError()
 
    const setAuth = (auth) => {
        isAuth.value = auth
    }

    const getUser = (email)=> {
        
        // return getUsersStore().find(item=> item.email === email)
        return users.value.find(item=> item.email === email)
    }

    /*<ToDoList>*/
    const getToDoData = async (url) => {
        if(!usersData.value) {

 

            const res = await handler( url ? apiClient.get(url) : apiRouter.users.todos.index(profile.value.id))
           
            usersData.value = getData(res)
            newTaskArr.value.push(res)
        }
    };
   
    const updateUserStatus = (user) => {
        console.log('updateUserStatus');
        user.completed = !user.completed;
    };

    const addTask = async (task) => {
        if (task.trim() === '') {
           return;  
        }
        
        const newTaskTitle = task.replace(/\s+/g, ' ').trim()
        const newTaskObject = {
            userId: profile.value.id,
            id: usersData.value.length + 1, 
            title: newTaskTitle,
            completed: false,
        };
    
        usersData.value.push(newTaskObject);
        
        return newTaskObject;
    }

    const removeTask = (taskId) => {
        console.log('removeTask');
        usersData.value = usersData.value.filter((user) => user.id !== taskId);
    }
    /*</ToDoList>*/

    /* onLogin*/
    const onLogin = async (form) => {
        console.log(form);
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const user =  getUser(form.email)
                console.log(typeof user);
                if(!user || form.password !== user.password) {
                   return reject(new Error("invalid data"))
                }
              resolve(true) ;

            }, 1000);
        }) 
       
        isAuth.value = true;
        console.log(isAuth.value, form);
        // console.log(mockAuth);
    }

    /*onLogout isAuth.value = false*/
    const onLogout = async () => {
        await new Promise((resolve) => {
            setTimeout(() => {
                isAuth.value= false
              resolve(isAuth.value);
            }, 1000);
        })
        console.log(isAuth.value);
    }

    const onRegister = async (form) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if(getUser(form.email)){
                    return reject(new Error('error юсер існє'))
                }
                // const users = getUsersStore();
                users.value.push(form)
                // setUsersStore(users);
              resolve(true) ;
            }, 1000);
        }) 
        isAuth.value = true;
        console.log(isAuth);
    }

    return {
        profile, 
        users, 
        isAuth,
        usersData, 
        setAuth, 
        onLogin, 
        onLogout, 
        onRegister,
        updateUserStatus,
        removeTask,
        addTask,
        getToDoData
    }
 
},{
    persist: {
        paths: ['isAuth', 'users'],
    },
})





export default useAuthStore;