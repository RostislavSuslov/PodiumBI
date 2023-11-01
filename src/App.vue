<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="route.meta.layout ? route.meta.layout : AppLayout">
        <pre>{{route.meta.layout}}</pre>
        <component v-if="Component" :is="Component"></component>
      </component>
  </RouterView>

  <pre>{{movieStore.obj}}</pre>
</template>


<script setup>
    import AppLayout from './layouts/AppLayout.vue';
    import {useMovieStore} from '@/stores/MovieStore'

    const movieStore = useMovieStore();
</script>


<style scoped lang="scss">
</style>
<!--suslovros@gmail.com-->
<!--suslovros+1@gmail.com-->