import {defineStore} from "pinia"
import {ref} from "vue";


const mockAuth = [
    {   
        id: "1",
        email: '123456@qq',
        password: '123456',
    }, 
];

// const testObj = {
//     id: "2",
//     email: 'qwerty@qq',
//     password: 'qwerty', 
// }

// function pushToLocalStorage(key, user) {
//     try {
//         const toJsonString = JSON.stringify(user)
//         localStorage.setItem(key, toJsonString)
//         return true;
//     } catch (error) {
//         console.error('Error save obj to localStorage:', error);
//         return false;
//     }
// }


// function pullFromLocalStorage(key) {
//     try {
//         const jsonString = localStorage.getItem(key);
//         if(jsonString){
//             const obj = JSON.parse(jsonString);
//             return obj;
//         }
//     } catch(error) {
//         console.error('error pull in localStorage:', error)
//     }
//     return null;
// }

// pushToLocalStorage('testObj', testObj)

// const pullObjectFromLocalStorage = pullFromLocalStorage('testObj');
// if(pullObjectFromLocalStorage) {
//     console.log('Получил данные из localStorage:', pullObjectFromLocalStorage);
// } else {
//     console.log('Не получил.');
// }

// mockAuth.push(pullObjectFromLocalStorage);

// console.log("mockAuth: ", mockAuth);














const getUser = (email)=> {
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