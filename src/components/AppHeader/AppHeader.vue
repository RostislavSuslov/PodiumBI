<template>
  <header class=" bg-black text-white">
      <div class="flex w-full max-w-[1464px] mx-auto px-3 py-6 pr-[60px]">
        <app-logo class="mr-[-57px]"></app-logo>
        <template-nav :items="nav" variant="header"></template-nav>
        <div class="grid justify-center items-center">
          <button @click="authStore.onLogout" v-if="authStore.isAuth" class="whitespace-nowrap  hover:text-primaryColor">LogOut</button>
          <template v-else>
            <login-modal/>
            <registration-modal/>
          </template>
        </div>
      </div>
  </header>
</template>

<script setup>
import AppLogo from "@/components/ui/AppLogo.vue";
import TemplateNav from "@/components/ui/TemplateNav.vue";
import LoginModal from "@/components/ui/LoginModal.vue";
import RegistrationModal from "@/components/ui/RegistrationModal.vue";
import useAuthStore from '@/stores/authStore.js'

const authStore = useAuthStore();

const nav = [
  {
    text: 'Home',
    to: {name: 'home'},
    /*children: [
      {
        text: 'Nested nav',
        href: 'https://google.com',
      },
      {
        text: 'Nested nav',
        href: 'https://google.com',
      },
      {
        text: 'Nested nav',
        href: 'https://google.com',
      },
      {
        text: 'Nested nav',
        href: 'https://google.com',
      },
    ]*/
  },
  {
    text: 'podium-bi-portal',
    to: {name: 'podium-bi-portal'}
  },
 /* {
    text: 'walmart-retail-data',
    to: {name: 'walmart-retail-data'}
  },*/
  {
    text: 'contact',
    to: {name: 'contact'}
  },
  {
    text: 'episodes',
    to: {name: 'episodes'}
  },
  {
    text: 'blog',
    to: {name: 'blog'}
  },
]
</script>

<style scoped>

</style>