<template>
  <div class="container mx-auto" v-show="!loading">
    <h1 class="text-title_1 mb-5">Posts list:</h1>
    <b v-if="loading">Loading...</b>
    <ul class=" grid grid-cols-5 gap-6">
      <li v-for="post in postData" :key="post.id" class="p-5 border">
        {{ post.title }}
        <router-link :to="'/posts/' + post.id" class="flex flex-col h-full hover:text-primaryColor">
          <b> {{ 'posts:' + post.id}}</b>
        </router-link>
      </li>
    </ul>
    <div v-if="next || prev">
      <button v-if="prev" @click="fetchData(prev)" class="px-6 py-3 border bg-amber-300">prev</button>
      <button v-if="next" @click="fetchData(next)" class="px-6 py-3 border bg-amber-300">next</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import apiRouter from '../api/apiRouter';
import apiClient from '../api/apiClient';
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError'

const {loading, data: postData, handler} = useHandleLoadingAndError();
const posts = computed(()=> postData.value?.results || [])
const prev = computed(()=> postData.value?.info?.prev);
const next = computed(()=> postData.value?.info?.next);

const fetchData = async (url) => {
  const hand = await handler(()=> ( url ? apiClient.get(url) : apiRouter.posts.index()))
  console.log(hand);
};

fetchData();
</script>