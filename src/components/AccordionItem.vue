<template>
  <div class="bg-white p-6 mb-6">
    <h3 class="text-title_3 mb-8">{{title}}</h3>
    <div class="flex">
      <div class="max-w-[432px]">
        <h5 class="text-title_5">{{content.description}}</h5>
        <button>{{content.button}}</button>
      </div>
      <div class="ml-auto">
        <img :src="content.img" :alt="content.alt">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: Object,
  button: String,
  img: String,
  alt: String,
})
</script>
