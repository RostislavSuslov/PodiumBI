<template>
  <div class="container mx-auto my-5">
    <div v-if="loading">
      Loading...
    </div>
    <div  v-else class=" p-5 border mb-5">
      <h1 class="text-title_1 italic">Single course {{ courses.id }}</h1>
      <h2 class="text-title_4 ">{{ courses.title }}</h2>
      <div class="text-title_4">
        rating:
        <span class="star-rating">
          <span :style="{ width: ratingPercentage }"></span>
        </span>
      </div>

      <img :src="courses.thumbnail" :alt="courses.title">
      <form @submit="onSubmit">
          <input
              @change="onSetFile($event.target.files[0])"
              name="file"
              type="file"
          >
<!--        <BaseButton @submit="onSubmit">Submit</BaseButton>-->
      </form>

      <ul class="grid gap-4 grid-cols-5 grid-rows-1 my-8" >
        <li class="border text-center p-4" v-for="state in courses.states" :key="state.id">{{state.name}}</li>
      </ul>
      <BaseButton @click="deletePost">Delete this course</BaseButton>
      <pre>route.params {{$route.params}}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import apiRouter from '@/api/apiRouter';
import useHandleLoadingAndError from '@/composables/useHandleLoadingAndError';
import { useSingleCoursesStore } from '@/stores/singleCoursesStore';
import BaseButton from "@/components/ui/BaseButton.vue";
import {useForm} from "vee-validate";
import useUpdateStore from '@/stores/updateStore.js'
const updateStore = useUpdateStore();


const singleCoursesStore = useSingleCoursesStore();
const route = useRoute();
const {handler, loading} = useHandleLoadingAndError();
const courses = ref({ courses: [] });
const fetchCourses = async (url) => {
  const response = await apiRouter.admin.courses.show(route.params.id)
  courses.value = response.data.data;
  handler(singleCoursesStore.getCourses(url))
}

const fetchData = async () => {
  await handler(()=> Promise.all([fetchCourses()]))
};

const deletePost = async () => {
  console.log(route.params.id)
   await apiRouter.admin.courses.delete(route.params.id)
}

watch(()=> route.params.id, fetchData, { immediate: true })
// const rating = ref(3);
const ratingPercentage = computed(() => {
  return `${(courses.value.rating / 5) * 100}%`;
});






const initialValue = {
  email: "",
  password: "",
};

const { handleSubmit, resetForm } = useForm({
  initialValues: initialValue,
})
/*const onSetFile = async (value) => {
  console.log(value)
  loading.value = true;

  try {
    await apiRouter.admin.courses.update(value)
    resetForm();
  } catch (error) {
    console.log(error);
  } finally {
    resetForm();
  }
  // await fetchData();
};*/

const onSetFile = async (value) => {

   loading.value = true;
  try {
    const formData = new FormData();
    formData.append('file', value);

    console.log(formData)
    await apiRouter.admin.courses.update(route.params.id, formData);
    alert("збс")
  } catch (error) {
    console.error(error);
  } finally {
    resetForm();
    loading.value = false;
  }
};

const onSubmit =  handleSubmit(async (data, {resetForm}) => {
  const res =  await handler(updateStore.update(data))

  if (!res.error) {
    resetForm()
  }
});

</script>

<style>
.star-rating {
  background-image: url('../assets/img/raiting-empty.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  width: 160px;
  height: 30px;
  position: relative;
}

.star-rating span {
  background-image: url('../assets/img/raiting-full.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  overflow: hidden;
  float: left;
  padding-top: 29px;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
