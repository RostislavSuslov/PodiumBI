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
import HeaderTemplate from "@/components/AppHeader/AppHeader.vue";
import FirstScreen from "@/components/TemplateFirstScreen/TemplateFirstScreen.vue";
import SliderReview from "@/components/TemplateSliderReview/TemplateSliderReview.vue";
import AdvantagesTemplate from "@/components/TemplateAdvantages/TemplateAdvantages.vue";
import ServicesTemplate from "@/components/TemplateServices/TemplateServices.vue";
import AccordionTemplate from "@/components/TemplateAccordion/TemplateAccordion.vue";
import FooterTemplate from "@/components/AppFooter/AppFooter.vue";
</script>

<style scoped>

</style>