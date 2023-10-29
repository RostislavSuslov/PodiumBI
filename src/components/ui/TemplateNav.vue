<template>
  <ul class="mx-auto flex">
    <template-nav-item v-for="(item, index) in items" v-bind="item" :key="index" :variant="variant">
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
  variant: String,
})
</script>

<style scoped>

ul li {
  position: relative;
}

ul li ul {
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 24px;
  min-width: 250px;
  background: blueviolet;
  padding: 12px;
}

</style>