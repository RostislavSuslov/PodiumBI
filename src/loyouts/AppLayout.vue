<template>
  <div class="flex flex-col min-h-[100vh]">
    
    <AppHeader/>
    <main>
      <slot>
        <RouterView/>
        <TemplateFirstScreen/>
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