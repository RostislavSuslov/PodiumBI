import './assets/main.css'
import {createPinia} from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// const pinia = createPinia();
// console.log(pinia.state.value.user);

app.use(router)
app.use(createPinia())
app.mount('#app')
