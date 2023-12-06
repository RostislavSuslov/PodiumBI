<template>

  <h1>PodiumBiPortalView</h1>
  <div class="d-flex flex-wrap justify-center gap-3 mx-auto px-3 max-w-2xl">
    <v-dialog width="500">
      <template v-slot:activator="{ props }">
        <v-btn class="ml-auto mr-2" v-bind="props" text="Open Dialog" color="secondary"> </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <div class="d-flex flex-col gap-4 w-full">
      <h2 class="text-xl-h1">{{comboValue}}</h2>
      <v-text-field label="Label" variant="outlined" type="input"></v-text-field>
      <v-text-field label="email" variant="outlined" type="email"></v-text-field>
      <v-text-field label="password" variant="outlined" type="password" error error-messages="my error"></v-text-field>
      <combobox-validate :items="comboItems" v-model="comboValue" syncVModel></combobox-validate>
    </div>
  </div>

</template>

<script setup>
import ComboboxValidate from "@/components/ui/ComboboxValidate.vue";
import {ref} from 'vue';

const comboValue = ref('Texas')
const comboItems = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']

</script>

<style scoped>

</style>