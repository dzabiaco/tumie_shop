<template>
  <div class="wrapper">
    <Preloader v-if="isLoading"/>
    <TheHeader/>
    <MainContent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Preloader from '../components/Preloader.vue';
import TheHeader from "@/components/TheHeader.vue";
// import AboutHeader from "../components/AboutPage/AboutHeader.vue";
import MainContent from "@/components/MainContent.vue";

export default defineComponent({
  name: 'Home',
  components: {
    MainContent,
    TheHeader,
    Preloader
  },
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
  data(){
    return {
      isLoading: false
    }
  }
});
</script>
