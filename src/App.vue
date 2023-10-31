<script setup>
    import AppLayout from './loyouts/AppLayout.vue'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
     
      <component :is="route.meta.layout ? route.meta.layout : AppLayout">
        <component v-if="Component" :is="Component"></component>
      </component>
  </RouterView>
</template>

<style scoped lang="scss">
</style>
<!--suslovros@gmail.com-->
<!--suslovros+1@gmail.com-->