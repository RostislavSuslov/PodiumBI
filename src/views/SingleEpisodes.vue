<template>
    <div class="container mx-auto">
        <h1 class="text-title_1 mb-5">SingleEpisodes</h1>

        <pre>{{$route.params}}</pre>
        <pre>{{episode}}</pre>
    </div>
</template>
<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRoute} from 'vue-router';

const url = 'https://rickandmortyapi.com/api/episode'
const route = useRoute();
const loading = ref(false);
const episode = ref();

const fetchData = async () => {
  try {
    loading.value = true;
    const response = await axios.get(url + "/" + route.params.id);
    episode.value = response.data.results;
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log('finaly');
    loading.value = false;
  }
};

fetchData();
</script>