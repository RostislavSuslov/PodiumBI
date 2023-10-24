<template>
  <ul class="mx-auto">
      <template-nav-item v-for="item in items" v-bind="item">
        <template #link-text="data">
          <slot name="link-text" v-bind="data"/>
        </template>
      </template-nav-item>
  </ul>
</template>

<script setup>
import TemplateNavItem from "@/components/ui/TemplateNavItem.vue";

defineProps({
  items: Array,
  horizontal: Boolean,
})
</script>

<style scoped>

</style>