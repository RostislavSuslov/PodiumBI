<template>
  <li>
    <template-link
        :href="href"
        :to="to"
        :target="target"
        v-bind="$attrs"
    >
      {{icon}}
      <slot name="link-text">
        {{text}}
      </slot>
    </template-link>
    <template-nav v-if="children" :items="children"/>
  </li>
</template>

<script setup>
import {defineAsyncComponent} from "vue";
import TemplateLink from "@/components/ui/TemplateLink.vue";
const TemplateNav = defineAsyncComponent(()=> import("@/components/ui/TemplateNav.vue"))

defineOptions({
  inheritAttrs: false, // запретить любой v-bind с родительского компонента в тег обёртку <li>  для того что бы всё передавалось в тег <a>
})

defineProps({
  text: String,
  href: String,
  to: [Object, String],
  target: String,
  icon: String,
  children: Array,
})
</script>

<style scoped>

</style>