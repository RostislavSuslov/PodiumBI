<template>
    <div class="container mx-auto my-5">
        <h1 class="text-title_1 mb-5">ToDoList</h1>
        <div class="flex"> 
            <ul class="grid">
                <li  v-for="user in usersData" :key="user.id">
                    <pre>{{user}}</pre>
                </li>
            </ul>
            <div class="w-full">
            <form class="border border-cyan-800 p-7 w-full mw-[700px] mx-auto rounded-lg grid gap-5 mb-5">
                <h4 class="text-title_2">Add task:</h4>
                <input 
                    class="border border-cyan-500 p-4 w-full rounded-lg" 
                    v-model="newTask"
                    >
                <button 
                    class="border border-green-500 p-4 w-full rounded-lg hover:bg-green-500"
                    type="button"
                    @click="addTask">add item</button>
            </form>
            <form class="border border-cyan-800 p-7 w-full mw-[700px] mx-auto rounded-lg grid gap-5 mb-5">
                <h4 class="text-title_2">Task list:</h4>
                <ul class="borderp-7 mx-auto rounded-lg grid gap-5 w-full">
                    <li class="flex items-center"
                        v-for="user in usersData" :key="user.id"
                    >
                        <input 
                            class="border border-cyan-500 p-3 w-full rounded-lg"
                            :value="user.title">
                        <div>
                            <label class="relative flex cursor-pointer items-center rounded-full p-3" style="position: relative; overflow: hidden;">
                                <input 
                                type="checkbox" 
                                class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-16 before:w-16 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
                                :checked="user.completed"
                                >
                                <!-- @change="updateUserStatus(user)"  -->
                                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <div class="relative flex cursor-pointer items-center rounded-full p-3">
                            <button class=" before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-16 before:w-16 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" xml:space="preserve">
                                    <circle fill="#4D4D4D" cx="64" cy="64" r="64"/>
                                    <path fill="#FFFFFF" d="M100.3,90.4L73.9,64l26.3-26.4c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0L64,54.1L37.7,27.8  c-0.4-0.4-1-0.4-1.4,0l-8.5,8.5c-0.4,0.4-0.4,1,0,1.4L54,64L27.7,90.3c-0.4,0.4-0.4,1,0,1.4l8.5,8.5c0.4,0.4,1.1,0.4,1.4,0L64,73.9  l26.3,26.3c0.4,0.4,1.1,0.4,1.5,0.1l8.5-8.5C100.7,91.4,100.7,90.8,100.3,90.4z"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>
            </form>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import apiRouter from '../api/apiRouter';
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";
import {ref} from "vue";

const selectedUser = ref();
const usersData = ref()
const toDoData = ref()

const {loading, handler} = useHandleLoadingAndError()


const fetchData = async () => {
  const {data} = await handler(() => apiRouter.users.todos.index(7))
  usersData.value = data
};

const fetchToDos = async () => {
  const {data} = await handler(() => apiRouter.users.todos.index(selectedUser.value))
  toDoData.value = data
};

const onSetToDos = (id) => {
  selectedUser.value = id
  if (id) {
    fetchToDos()
  }
};

const newTask = ref('')

const addTask = async () => {
  if (newTask.value.trim() === '') {
    return; // Не добавляем пустые задачи
  }

  const newTaskData = {
    title: newTask,
    completed: false // Новая задача начинается не выполненной
  };

  const { data } = await handler(() => apiRouter.users.todos.create(selectedUser.value, newTaskData));

  // После успешного добавления задачи, обновите список задач, чтобы отобразить новую задачу
  fetchToDos();

  // Очистите поле ввода
  newTask.value = '';
};
 




fetchData();
</script>