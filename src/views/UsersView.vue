<template>
    <div class="container mx-auto">
      <h1>User list:</h1>
      <ul class="flex flex-wrap gap-5 justify-center">
        <li v-for="character in characters" :key="character.id">
          <router-link :to="'/users/' + character.id">
            <img :src="character.image" alt="">
            <h3 class="text-[24px]">{{ character.name }}</h3>
            <pre>
              {{ '/users/' + character.id }}
            </pre>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'; // Импортируем useRoute из Vue Router
  import axios from 'axios';
  
  const route = useRoute();
  const characters = ref([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      characters.value = response.data.results;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  </script>
  