<template>
  <section class="test bg-black text-white pt-[104px] bg-[url('src/assets/img/gradient-first-screen.png')] bg-center-bottom bg-scale-100 bg-no-repeat">
    <div class="container max-w-[978px] min-h-[1628px] mx-auto px-3">
       <first-screen-title
           title="Podium BI"
           subtitle="Your Data. Only Smarter." />
    </div>
  </section>
</template>

<script>

import {defineComponent} from "vue";
import FirstScreenTitle from "@/components/TemplateFirstScreen/FirstScreenTitle.vue";

export default defineComponent({
  components: {FirstScreenTitle}
})
</script>

<style scoped>
.test {
  background-position: center bottom;
  background-size: 100%;
}
</style>