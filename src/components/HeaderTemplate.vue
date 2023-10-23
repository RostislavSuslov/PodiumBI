<template>
  <header class="flex max-w-[1464px] mx-auto px-3 py-10 pr-[60px] bg-black text-white">
     <app-logo class="mr-[88px]"></app-logo>
    <nav class="mx-auto">
      <ul class="flex">
        <li>
          <RouterLink to="/" class="text-title_6 p-5 leading-none hover:text-primaryColor">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/podium-bi-portal" class="text-title_6 p-5 leading-none hover:text-primaryColor">Podium Bi Portal</RouterLink>
        </li>
        <li>
          <RouterLink to="/walmart-retail-data" class="text-title_6 p-5 leading-none hover:text-primaryColor">Walmart Retail Data</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="text-title_6 p-5 leading-none hover:text-primaryColor">Contact</RouterLink>
        </li>
        <li>
          <RouterLink to="/blog" class="text-title_6 p-5 leading-none hover:text-primaryColor">Blog</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import {RouterLink} from 'vue-router'
import AppLogo from "@/components/AppLogo.vue";
</script>

<style scoped>

</style>