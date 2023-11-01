import {defineStore} from "pinia"
import {ref} from "vue";
 
const userArray = [];
const mockAuth = [
    {   
        email: '123456@qq',
        password: '123456',
    }, 
];

function pushToLocalStorage(key, user) {
    try {
        const toJsonString = JSON.stringify(user)
        localStorage.setItem(key, toJsonString)
        return true;
    } catch (error) {
        console.error('Error save obj to localStorage:', error);
        return false;
    }
}


const useRegistrationStore = defineStore('newUser', ()=> { 
    const isRegister = ref(false)

    const setRegister = (register) => {
        isRegister.value = register
    }

    const onRegister = async (form) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true) ;
            }, 1000);
        }) 
       
        isRegister.value = true;
        console.log(isRegister.value, form);
        pushToLocalStorage(form.email, form)
    }





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

    return {
        isRegister, setRegister, onRegister
    }
})

export default useRegistrationStore;






