<template>
 <div class="flex flex-col min-h-[100vh]">
   <app-header />
   <main>
<!--     <first-screen />-->
<!--     <slider-review />-->
<!--     <advantages-template />-->
<!--     <services-template />-->
<!--     <accordion-template />-->
   </main>
   <app-footer />

 </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader/AppHeader.vue";
import FirstScreen from "@/components/TemplateFirstScreen/TemplateFirstScreen.vue";
import SliderReview from "@/components/TemplateSliderReview/TemplateSliderReview.vue";
import AdvantagesTemplate from "@/components/TemplateAdvantages/TemplateAdvantages.vue";
import ServicesTemplate from "@/components/TemplateServices/TemplateServices.vue";
import AccordionTemplate from "@/components/TemplateAccordion/TemplateAccordion.vue";
import AppFooter from "@/components/AppFooter/AppFooter.vue";
</script>

<style scoped>

</style>