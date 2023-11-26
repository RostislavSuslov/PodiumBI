<template>
    <transition-group class="flex flex-col">
      <BasePopup>
        <template #header>
          <slot name="header" />
        </template>
        <template #default>
          <slot name="body"/>
        </template>
      </BasePopup>
    </transition-group>
</template>

<script setup>
  import BasePopup from "@/components/ui/BasePopup.vue";
</script>