<template>
  <div>
    <slot name="header" :toggle="onToggle" :isExpanded="isExpanded">
      <button @click="onToggle" class="flex flex-wrap gap-3 justify-between items-center px-6 py-3 bg-gray-300 w-full">
        <span v-if="title" class="text-4xl block">
          {{title}}
        </span>
        <span class="w-10 h-10 flex items-center justify-center">
          <!-- <base-icon :name="isExpanded ? 'expand_less' : 'expand_more'"/>-->
        </span>
      </button>
    </slot>
    <slot :isExpanded="isExpanded" :bodyClass="bodyClass">
      <div v-if="body" class="">
        {{ body }}
      </div>
    </slot>
  </div>
</template>

<script setup>
// import BaseIcon from "@/components/ui/BaseIcon.vue";
import {computed} from "vue";

const props = defineProps({
  title: String,
  body: String,
  isExpanded: Boolean,
})
const emit = defineEmits(['toggle']);
const bodyClass = computed(() => {
  return [
    'border-2 rounded-b-xl border-gray-300 overflow-hidden',
    {
      '!hidden': !props.isExpanded,
    }
  ]
});

const onToggle = () => emit('toggle')
</script>
