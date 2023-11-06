<template>
  <div class="container mx-auto">
    <h1 class="text-title_1 mb-5">Single Episode</h1>
    <h4 class="text-title_4">{{ episode.name }}</h4>
    <h4 class="text-title_5">{{ episode.air_date }}</h4>
    <ul class=" grid grid-cols-5 gap-6">
      <li v-for="episode in 5" :key="episode" class=" p-5 border bg-black">
        <router-link :to="'/episodes/' + episode"  class="flex flex-col text-center h-full text-white hover:text-primaryColor">
            {{ episode }}
        </router-link>
      </li>
    </ul>
    <div>
      <pre>{{ episode.characters  }}</pre> 
     
    </div>
    <pre>{{$route.params}}</pre>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// import apiClient from '../api/apiClient.js'
import apiRouter from '../api/apiRouter'

console.log('script setup');
const route = useRoute();
 
const loading = ref(false);
const episode = ref({ characters: [] });  

const fetchData = async () => {
  try {
    loading.value = true;
    const response = await apiRouter.episod.show(route.params.id) //apiClient.get(`episode/${route.params.id}`);
    episode.value = response.data;
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }  finally {
    console.log('finally');
    loading.value = false;
  }
};
console.log(route.params.id);
watch(()=> route.params.id, fetchData, { immediate: true })

</script>
