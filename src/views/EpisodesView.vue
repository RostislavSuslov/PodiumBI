<template>
  <div class="container mx-auto">
    <h1 class="text-title_1 mb-5">Episodes list:</h1>
    <ul class="flex flex-wrap gap-5 justify-center">
      <li v-for="episode in episodes" :key="episode.id">
        <router-link :to="'/episodes/' + episode.id">
          <h3 class="text-[24px]">{{ episode.episode }}</h3>
          <pre>
            {{ '/episodes/' + episode.id }}
          </pre>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/episode';
const episodes = ref([]);
const loading = ref(true);  

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    episodes.value = response.data.results;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading.value = false;  
  }
};

fetchData();
</script>