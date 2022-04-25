<template>
  <Preloader v-if="isLoading"/>
  <main class="main-content">
    <!--== Start Faq Area Wrapper ==-->
    <section class="page-not-found-area">
      <div class="container pt--0 pb--0">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-6">
            <div class="page-not-found-wrap">
              <div class="page-not-found-content">
                <h3 class="not-found-text">404</h3>
                <h3 class="title">Page Cannot Be Found!</h3>
                <p class="desc">Seems like nothing was found at this location. Try something else or you can go back to the homepage following the button below!</p>
                <router-link class="btn-theme-border" to="/">Back to home</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--== End Faq Area Wrapper ==-->
  </main>

<!--  <FooterArea/>-->
</template>

<script>
import Preloader from "@/components/Preloader";
import FooterArea from "@/components/FooterArea";
export default {
name: "NotFound",
  components: {Preloader},
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

<style scoped>
.main-content{
  padding-top: 100px;
}
</style>