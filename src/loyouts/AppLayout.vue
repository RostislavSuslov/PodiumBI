<template>
 <div>
   <header-template />
   <main class="mt-[-104px]">
     <first-screen />
     <slider-review />
     <advantages-template />
     <services-template />
     <accordion-template />
   </main>
   <footer-template />

 </div>
</template>

<script setup>
import HeaderTemplate from "@/components/HeaderTemplate.vue";
import FirstScreen from "@/components/FirstScreen.vue";
import SliderReview from "@/components/SliderReview.vue";
import AdvantagesTemplate from "@/components/AdvantagesTemplate.vue";
import ServicesTemplate from "@/components/ServicesTemplate.vue";
import AccordionTemplate from "@/components/AccordionTemplate.vue";
import FooterTemplate from "@/components/FooterTemplate.vue";
</script>

<style scoped>

</style>