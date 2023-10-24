<template>
  <header class="flex w-full max-w-[1464px] mx-auto px-3 py-10 pr-[60px] bg-black text-white">
     <app-logo class="mr-[-57px]"></app-logo>
<!--    <nav class="mx-auto">-->
<!--      <ul class="flex">-->
<!--        <li>-->
<!--          <template-link to="/">Home</template-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <template-link to="/podium-bi-portal">Podium Bi Portal</template-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <template-link to="/walmart-retail-data">Walmart Retail Data</template-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <template-link to="/contact">Contact</template-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <template-link to="/blog">Blog</template-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <ul class="flex">-->
<!--        <li v-for="i in 5">-->
<!--          <template-link-->
<!--              :to="{name: 'HomeChild', params: {id: i + '-i-am-slug'}}"-->
<!--          >-->

<!--            {{i}} slug link-->
<!--          </template-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->
      <template-nav :items="nav"></template-nav>


  </header>
</template>

<script setup>
import AppLogo from "@/components/ui/AppLogo.vue";
// import TemplateLink from "@/components/ui/TemplateLink.vue";
import TemplateNav from "@/components/ui/TemplateNav.vue";


const nav = [
  {
    text: 'Home',
    to: {name: 'home'},
    children: [
      {
        text: 'Nested nav',
        href: 'https://google.com',
      }
    ]
  },
  {
    text: 'podium-bi-portal',
    to: {name: 'podium-bi-portal'}
  },
  {
    text: 'walmart-retail-data',
    to: {name: 'walmart-retail-data'}
  },
  {
    text: 'contact',
    to: {name: 'contact'}
  },
  {
    text: 'blog',
    to: {name: 'blog'}
  },
]
</script>

<style scoped>

</style>