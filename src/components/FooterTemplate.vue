<template>
  <footer class="bg-black pt-[300px] pb-[50px] text-white">
     <div class="flex justify-between max-w-[1024px] px-3 mx-auto">
        <div class="flex flex-col justify-between">
          <app-logo class="pt-1"></app-logo>
          <div>Copyright @ Podium BI 2023</div>
        </div>
        <div class="footer-navigation flex font-fontSecondary max-w-[640px] w-full justify-between">
            <nav>
              <h6 class="text-title_6 font-bold">Quick links</h6>
              <ul>
                <li>
                  <a href="#" class="text-title_6">Home</a>
                </li>
                <li>
                  <a href="#" class="text-title_6">Podium Bi Portal</a>
                </li>
                <li>
                  <a href="#" class="text-title_6">Walmart Retail Data</a>
                </li>
                <li>
                  <a href="#" class="text-title_6">Contact</a>
                </li>
                <li>
                  <a href="#" class="text-title_6">Blog</a>
                </li>
              </ul>
            </nav>
          <nav>
            <h6 class="text-title_6 font-bold">Support</h6>
            <ul>
              <li>
                <a href="#" class="text-title_6">Help Desk</a>
              </li>
              <li>
                <a href="#" class="text-title_6">Roadmap</a>
              </li>
              <li>
                <a href="#" class="text-title_6">Facebook Group</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 class="text-title_6 font-bold">Company</h6>
            <ul>
              <li>
                <a href="#" class="text-title_6">Terms</a>
              </li>
              <li>
                <a href="#" class="text-title_6">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-title_6">Don’t sell my info</a>
              </li>
              <li>
                <a href="#" class="text-title_6">Privacy Center</a>
              </li>
            </ul>
          </nav>
        </div>
     </div>
  </footer>
</template>

<script setup>
import AppLogo from "@/components/AppLogo.vue";


</script>

<style scoped>
footer {
  background-image: url(src/assets/img/gradient-footer.png)
}

</style>