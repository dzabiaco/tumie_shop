<template>
  <section class="product-area product-default-area">
    <div class="container pt--0">
      <div class="row">
        <div class="col-12">
          <div class="section-title mb-45 mb-sm-20 shape-center text-center">
            <h5 class="sub-title">Best PRODUCT</h5>
            <h2 class="title">New Collection</h2>
          </div>
<!--          <div class="isotope-filter">-->
<!--            <button class="active" data-filter="*">All</button>-->
<!--            <button data-filter=".filter_new">New</button>-->
<!--            <button data-filter=".filter_best_sellers">Best Sellers</button>-->
<!--            <button data-filter=".filter_featured">Featured</button>-->
<!--            <button data-filter=".filter_on_sall">On Sall</button>-->
<!--          </div>-->
        </div>
      </div>
      <div class="row isotope-grid">
        <ProductDefaultAreaItem v-for="product in latestProducts"
                                :key="product._id"
                                :id="product._id"
                                :title="product.title"
                                :image="product.image"
                                :price="product.price"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductDefaultAreaItem from "@/components/ProductDefaultAreaItem";
export default {
name: "ProductDefaultArea",
  components: {ProductDefaultAreaItem},
  mounted() {
    this.$store.dispatch('products/loadLatestProducts')
  },
  computed: {
    latestProducts(){
      return this.$store.getters["products/latestProducts"];
    }
  }
}
</script>

<style scoped>

</style>