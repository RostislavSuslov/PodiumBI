<template>
  <div class="flex flex-col min-h-[100vh]">
    <AppHeaderAppHeader/>
    <AppHeader/>
    <main>
      <slot>
        <RouterView/>
        <TemplateAccordion/>
       
        {{one}}
        <button @click="one++">add</button>
      </slot>

    </main>
    <AppFooter/>
  </div>
</template>

<script setup>
const one = ref(1);
</script>

<style scoped>

</style>