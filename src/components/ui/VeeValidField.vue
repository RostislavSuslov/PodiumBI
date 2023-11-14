<template>
    <InputWrapper :label="label">
        <div class="w-full relative mx-auto py-4">
            <Field :name="name" 
            :id="id"
            :type="type"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event.target.value)"
            class="border border-cyan-500 p-4 w-full rounded-lg peer"
            />
            
            <ErrorMessage class="text-red-600" :name="name"/>
         
           
        </div>
    </InputWrapper>
</template>

<script setup>
import {Field, ErrorMessage} from 'vee-validate';

import InputWrapper from "@/components/ui/InputWrapper.vue";

defineProps({
    label: String,
    placeholder: String,
    id: String,
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "text",
    },
})

defineEmits(['input', 'change'])
</script>
