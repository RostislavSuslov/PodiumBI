<template>
  <header class="flex max-w-[1464px] mx-auto px-3 py-10 pr-[60px] bg-black text-white">
     <app-logo class="mr-[-57px]"></app-logo>
    <nav class="mx-auto">
      <ul class="flex">
        <li>
          <template-link to="/">Home</template-link>
        </li>
        <li>
          <template-link to="/podium-bi-portal">Podium Bi Portal</template-link>
        </li>
        <li>
          <template-link to="/walmart-retail-data">Walmart Retail Data</template-link>
        </li>
        <li>
          <template-link to="/contact">Contact</template-link>
        </li>
        <li>
          <template-link to="/blog">Blog</template-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import AppLogo from "@/components/ui/AppLogo.vue";
import TemplateLink from "@/components/ui/TemplateLink.vue";
</script>

<style scoped>

</style>