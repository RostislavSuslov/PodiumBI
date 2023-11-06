<template>
  <div class="container mx-auto" v-show="!loading">
    <h1 class="text-title_1 mb-5">Episodes list:</h1>
    <b v-if="loading">Loading...</b>
    <ul class=" grid grid-cols-5 gap-6">
      <li v-for="episode in episodes" :key="episode.id" class=" p-5 border bg-black">
        <router-link :to="'/episodes/' + episode.id"  class="flex flex-col text-center h-full text-white hover:text-primaryColor">
          <span class="text-[24px] mb-4">{{ episode.name }}</span>
          <span class="text-[20px] mt-auto"> {{ episode.air_date }}</span>
          <span class="mt-auto"> {{ 'episodes:' + episode.id}}</span>
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

const episodeDate = ref({ results: [], info: {} });
const episodes = computed(()=> episodeDate.value?.results || [])
const prev = computed(()=> episodeDate.value?.info?.prev);
const next = computed(()=> episodeDate.value?.info?.next);
const loading = ref(true);  

const fetchData = async (url) => {


  try {
    loading.value = true; 
    const response = await ( url ? apiClient.get(url) : apiRouter.courses.index());
    episodeDate.value = response.data;
    console.log(episodeDate.value);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading.value = false;  
  }
};

fetchData();
</script>