<template>
  <footer class="bg-primaryColor pt-[300px] pb-[50px] px-3 text-white">
     <div class="flex justify-between">
        <div class="flex flex-col justify-between">
          <app-logo></app-logo>
          <div>Copyright @ Podium BI 2023</div>
        </div>
        <div class="footer-navigation flex font-fontSecondary">
            <nav>
              <h6 class="text-title_6">Quick links</h6>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Podium Bi Portal</a>
                </li>
                <li>
                  <a href="#">Walmart Retail Data</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          <nav>
            <h6 class="text-title_6">Support</h6>
            <ul>
              <li>
                <a href="#">Help Desk</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
              <li>
                <a href="#">Facebook Group</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 class="text-title_6">Company</h6>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Don’t sell my info</a>
              </li>
              <li>
                <a href="#">Privacy Center</a>
              </li>
            </ul>
          </nav>
        </div>
     </div>
  </footer>
</template>

<script>

import {defineComponent} from "vue";
import AppLogo from "@/components/AppLogo.vue";

export default defineComponent({
  components: {AppLogo}
})
</script>

<style scoped>

</style>