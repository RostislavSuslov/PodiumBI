<template>
  <component
      :is="data.tag"
      :target="target"
      :class="classes"
      v-bind="data.attrs"
  >
  <slot></slot>
  </component>
</template>

<script setup>
import {computed} from "vue";
import {RouterLink} from "vue-router";

const props = defineProps({
  href: String,
  to: [Object, String],
  target: String,
  color: {
    type: String,
    validator(value) {
      return ['base', 'secondary'].includes(value)
    },
    default: 'base'
  }
})

const data = computed(() => {
  if (props.href) {
    return {
      tag: 'a',
      attrs: {
        href: props.href
      }
    }
  }
  return {
    tag: RouterLink,
    attrs: {
      to: props.to
    }
  }
})

const classes = computed(() => {
  return {
    base: 'text-title_6 inline-block p-5 leading-none hover:text-primaryColor',
    secondary: "text-title_3 hover:text-green-500"
  }[props.color]
})
</script>

<style scoped>

</style>