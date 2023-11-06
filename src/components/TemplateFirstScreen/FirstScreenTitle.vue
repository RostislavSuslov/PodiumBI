<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
  }
})
</script>

<template>
  <div class="text-center flex flex-col">
    <h1 class="text-title_1">{{ title }}</h1>
    <h3 class="text-title_4">{{ subtitle }}</h3>
    <div class="flex flex-col">
      <a href="#">Watch now</a>
      <a href="#">try now</a>
    </div>
    <ul class="flex text-center">
      <li>Power BI Embded</li>
      <li>Unlimited Users</li>
      <li>Access Anywhere</li>
    </ul>
    <img src="/assets/img/first-screen.png" class="max-w-full h-auto" alt="Podium BI">
  </div>
</template>

<style scoped>

</style>
