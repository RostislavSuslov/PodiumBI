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
import HeaderTemplate from "@/components/Header/HeaderTemplate.vue";
import FirstScreen from "@/components/FirstScreen/FirstScreen.vue";
import SliderReview from "@/components/SliderReview/SliderReview.vue";
import AdvantagesTemplate from "@/components/AdvantagesTemplate/AdvantagesTemplate.vue";
import ServicesTemplate from "@/components/ServicesTemplate/ServicesTemplate.vue";
import AccordionTemplate from "@/components/AccordionTemplate/AccordionTemplate.vue";
import FooterTemplate from "@/components/Footer/FooterTemplate.vue";
</script>

<style scoped>

</style>