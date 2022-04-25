<template>
  <Preloader v-if="isLoading"/>
  <AboutHeader/>
  <AboutContent/>
</template>
<script>
import Preloader from "@/components/Preloader";
import AboutHeader from "@/components/AboutPage/AboutHeader";
import AboutContent from "@/components/AboutPage/AboutContent";
export default {
  components: {Preloader, AboutHeader,AboutContent},
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
}
</script>