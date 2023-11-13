import {defineStore} from "pinia"
import {ref} from "vue";
import apiRouter from "@/api/apiRouter.js";
import useAuthStore from "@/stores/authStore.js"

const useTodoStore = defineStore('todoStore', () => {   //'todoStore' unique id. Can't be the same
  const tasks = ref([])
  const authStore = useAuthStore();

  /*<>*/
  const getToDoData = async () => {
      const res = await apiRouter.users.todos.index(authStore.profile.id)
      tasks.value= res.data
  };

  const addTask = async (form) => {
    const res = await apiRouter.users.todos.create(authStore.profile.id, form);
    const lastItemId = tasks.value[tasks.value.length -1].id;
    const newItam = { 
      ...res.data,
      id: lastItemId >= res.data.id ?  lastItemId + 1 : res.data.id
    }

    tasks.value.push(newItam);
    return newItam;
  }

  return {
    tasks,
    addTask,
    getToDoData,
  }
})

export default useTodoStore;