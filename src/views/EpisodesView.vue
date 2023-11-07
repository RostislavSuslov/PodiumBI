<template>
  <div class="container mx-auto" v-show="!loading">
    <h1 class="text-title_1 mb-5">Posts list:</h1>
    <b v-if="loading">Loading...</b>
    <ul class=" grid grid-cols-5 gap-6">
      <li v-for="post in postDate" :key="post.id" class="p-5 border">
        {{ post.title }}
        <router-link :to="'/posts/' + post.id" class="flex flex-col text-center h-full hover:text-primaryColor">
          <span class="mt-auto"> {{ 'posts:' + post.id}}</span>
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
import { ref, computed } from 'vue';
import apiRouter from '../api/apiRouter';
import apiClient from '../api/apiClient';

const postDate = ref({ results: [], info: {} });
const posts = computed(()=> postDate.value?.results || [])
const prev = computed(()=> postDate.value?.info?.prev);
const next = computed(()=> postDate.value?.info?.next);
const loading = ref(true);  

const fetchData = async (url) => {


  try {
    loading.value = true; 
    const response = await ( url ? apiClient.get(url) : apiRouter.posts.index());
    postDate.value = response.data;
    console.log(postDate.value);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading.value = false;  
  }
};

fetchData();
</script>