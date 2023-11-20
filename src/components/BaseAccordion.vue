<template>
  <AccordionWrapper :items="accordionList"></AccordionWrapper>
</template>

<script setup>
import AccordionWrapper from "@/components/AccordionWrapper.vue";
const accordionList = [
  {
    title: 'Ultimate report sharing',
    content: {
      description: '2. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
      button: 'start for free',
      img: '/public/assets/img/accordion-1.png',
      alt: "Ultimate"
    },
  },
  {
    title: 'Feeling Overwhelmed by managing Power BI content?',
    content: {
      description: '1. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
      button: 'start for free',
      img: '/public/assets/img/accordion-2.png',
      alt: "solution"
    },
  },
  {
    title: 'Want to manage and share content easily and do it all with just one Power BI license?',
    content: {
      description: '3. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
      button: 'start for free',
      img: '/public/assets/img/accordion-3.png',
      alt: "PodiumBI"
    },
  },
]
</script>

<style scoped>

</style>