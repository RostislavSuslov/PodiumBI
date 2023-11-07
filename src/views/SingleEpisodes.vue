<template>
  <div class="container mx-auto">
    <h1 class="text-title_1 mb-5 italic p-5 border">Single post {{ post.id }}</h1>
    <h2 class="text-title_4 ">{{ post.title }}</h2>
    <h2 class="text-title_4 ">{{ post.userId }}</h2>
    <div class="p-5 border">
      {{ post.body }}
    </div>
    <div class="comments">
      <h2 class="text-title_4">coments:</h2>
      <!-- {{ commentData }} -->
    </div>
    <ul class="grid gap-7">
      <li v-for="comment in commentData" :key="comment.id" class="p-5 border">
        
        <span v-if="comment.postId === post.userId">
          {{ comment.postId }}
          
        </span>
        
      </li>
    </ul>  
  
    <div>
      
     
    </div>
    <pre>route.params >>>> {{$route.params}}</pre>
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
const post = ref({ post: [] });  
const commentData = ref({ results: [], info: {} });  

const fetchData = async () => {
  try {
    loading.value = true;

    const response = await apiRouter.posts.show(route.params.id) //apiClient.get(`episode/${route.params.id}`);
    post.value = response.data;
    console.log(response);
    
    const responseComents = await apiRouter.comments.index()  
    commentData.value = responseComents.data;
    console.log(commentData.value);

    return response && responseComents;
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
