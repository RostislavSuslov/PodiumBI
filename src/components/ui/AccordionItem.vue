<template>
  <div>
    <slot name="header" :toggle="onToggle" :isExpanded="isExpanded">
      <button @click="onToggle" class="relative flex flex-wrap gap-3 justify-between items-center pl-[30px] py-[30px] pr-24 bg-white w-full rounded-[20px]">
        <span v-if="title" class="text-left text-4xl block">
          {{title}}
        </span>
        <span class="absolute top-[30px] right-[30px] w-10 h-10 flex items-center justify-center bg-bgBody text-primaryColor rounded-full">
           <BaseIcon :name="isExpanded ? ' fa-angle-up' : 'mt-1 fa-angle-down'"/>
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
import BaseIcon from "@/components/ui/BaseIcon.vue";
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
