<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="route.meta.layout ? route.meta.layout : AppLayout">
        <pre>{{route.meta.layout}}</pre>
        <component v-if="Component" :is="Component"></component>
      </component>
  </RouterView>
</template>


<script setup>
    import AppLayout from './layouts/AppLayout.vue';
    import useAuthStore from '@/stores/authStore'


    import {onMounted} from 'vue'
    const authStore = useAuthStore();
   
    onMounted(()=>{
      window.addEventListener("storage", (event) => {
        if(event.key === "appAuth") {
          const data = JSON.parse(event.newValue)
          
          authStore.setAuth(data.isAuth)
        }
      });
    })
</script>


<style scoped lang="scss">
</style>
<!--suslovros@gmail.com-->
<!--suslovros+1@gmail.com-->