<template>
  <Preloader v-if="isLoading"/>
  <main class="main-content">
<!--    <HomeSliderArea/>-->
    <HomeSlider/>
<!--    <ProductCategoryArea/>-->
    <ProductBannerArea/>
    <ProductDefaultArea/>
    <DividerArea/>
<!--    <TrendingProducts/>-->
    <BestProduct/>
    <FooterArea/>
  </main>
</template>

<script>
import HomeSliderArea from "@/components/HomeSliderArea";
import HomeSlider from "@/components/HomeSlider.vue";
// import ProductCategoryArea from "@/components/ProductCategoryArea";
import ProductBannerArea from "@/components/ProductBannerArea";
import ProductDefaultArea from "@/components/ProductDefaultArea";
import DividerArea from "@/components/DividerArea";
// import TrendingProducts from "@/components/TrendingProducts";
import BestProduct from "@/components/BestProduct";
import FooterArea from "@/components/FooterArea";
export default {
name: "MainContent",
  components: {HomeSlider,ProductBannerArea, ProductDefaultArea,
    DividerArea, BestProduct, FooterArea
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
}
</script>

<style scoped>

</style>