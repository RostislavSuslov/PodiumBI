<template>
    <TemplateFirstScreen/>
    <section class="mb-24">
      <div class="container mx-auto px-4 max-w-[986px]">
        <AccordionWrapper :items="accordionList">
          <template #body="{bodyClass, item}">
            <div class="grid grid-cols-[120px_1fr] gap-4" :class="bodyClass">
              <img :src="item.content.img" />
              <p>
                {{item.content.description}}
              </p>
            </div>
          </template>
        </AccordionWrapper>
      </div>
    </section>
</template>

<script setup>
    import TemplateFirstScreen from "@/components/TemplateFirstScreen/TemplateFirstScreen.vue";
    import AccordionWrapper from "@/components/ui/AccordionWrapper.vue";
    const accordionList = [
      {
        id: 1,
        title: 'Ultimate report sharing',
        content: {
          description: '2. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
          button: 'start for free',
          img: '/public/assets/img/accordion-1.png',
          alt: "Ultimate"
        },
      },
      {
        id: 2,
        title: 'Feeling Overwhelmed by managing Power BI content?',
        content: {
          description: '1. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
          button: 'start for free',
          img: '/public/assets/img/accordion-1.png',
          alt: "solution"
        },
      },
      {
        id: 3,
        title: 'Want to manage and share content easily and do it all with just one Power BI license?',
        content: {
          description: '3. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
          button: 'start for free',
          img: '/public/assets/img/accordion-1.png',
          alt: "PodiumBI"
        },
      },
    ];
</script>
