<template>
  <div class="container max-w-[986px] mx-auto px-4">
    <AccordionItem v-for="(item, index) in items" v-bind="item" :key="index">
      <template #link-text="data">
        <slot name="link-text" v-bind="data"/>
      </template>
    </AccordionItem>
  </div>
</template>

<script setup>
import AccordionItem from "@/components/AccordionItem.vue";

defineProps({
  items: Array,
})
</script>