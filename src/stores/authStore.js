import {defineStore} from "pinia"
import {ref} from "vue";
const mockAuth = [
    {   
        id: "1",
        login: "qwerty",
        email: '123456@qq',
        gender: "maly",
        password: '123456',
    },
    
]

const getUser = (email)=>{
    return mockAuth.find(item=> item.email === email)
}

const useAuthStore = defineStore('appAuth', ()=> {   //'appAuth' unique id. Can't be the same
    const isAuth = ref(false);

    const setAuth = (auth) => {
        isAuth.value = auth
    }


    /* onLogin*/
    const onLogin = async (form) => {
        console.log(form);
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const user =  getUser(form.email)
                
                if(!user || form.password !== user.password) {
                   return reject(new Error("invalid data"))
                }
              resolve(true) ;
            }, 1000);
        }) 
       
        isAuth.value = true;
        console.log(isAuth.value, form);
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
    return {
        isAuth, setAuth, onLogin, onLogout
    }

})

export default useAuthStore;