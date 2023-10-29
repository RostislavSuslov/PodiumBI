<template>
  <footer class="bg-black mt-auto pt-[300px] pb-[50px] text-white bg-[url('src/assets/img/gradient-footer.png')] bg-center-bottom bg-no-repeat bg-cover">
     <div class="flex justify-between max-w-[1024px] px-3 mx-auto">
        <div class="flex flex-col justify-between">
          <app-logo class="pt-1"></app-logo>
          <div>Copyright @ Podium BI 2023</div>
        </div>
        <div class="flex font-fontSecondary max-w-[640px] w-full justify-between mb-16">
            <nav>
              <h6 class="text-title_6 font-bold mb-3">Quick links</h6>
              <ul>
                <li class="mb-3">
                  <a href="#" class="text-title_6">Home</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="text-title_6">Podium Bi Portal</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="text-title_6">Walmart Retail Data</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="text-title_6">Contact</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="text-title_6">Blog</a>
                </li>
              </ul>
            </nav>
          <nav>
            <h6 class="text-title_6 font-bold mb-3">Support</h6>
            <ul>
              <li class="mb-3">
                <a href="#" class="text-title_6">Help Desk</a>
              </li>
              <li class="mb-3">
                <a href="#" class="text-title_6">Roadmap</a>
              </li>
              <li class="mb-3">
                <a href="#" class="text-title_6">Facebook Group</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 class="text-title_6 font-bold mb-3">Company</h6>
            <ul>
              <li class="mb-3">
                <a href="#" class="text-title_6">Terms</a>
              </li>
              <li class="mb-3">
                <a href="#" class="text-title_6">Privacy</a>
              </li>
              <li class="mb-3">
                <a href="#" class="text-title_6">Don’t sell my info</a>
              </li>
              <li class="mb-3">
                <a href="#" class="text-title_6">Privacy Center</a>
              </li>
            </ul>
          </nav>
        </div>
     </div>
  </footer>
</template>

<script setup>
import AppLogo from "@/components/ui/AppLogo.vue";


</script>

<style scoped>

</style>