<template>
  <div class="col-sm-6 col-lg-3 isotope-item filter_best_sellers filter_on_sall">
    <!--== Start Product Item ==-->
    <div class="product-item">
      <div class="product-thumb">
        <router-link :to="url">
          <img :src="image" width="270" height="320" alt="Image-HasTech">
        </router-link>
      </div>
      <div class="product-info">
        <h4 class="title"><router-link :to="url">{{title}}</router-link></h4>
        <div class="prices">
          <span class="price">${{price}}</span>
        </div>
      </div>
    </div>
    <!--== End prPduct Item ==-->
  </div>
</template>

<script>
export default {
name: "ProductDefaultAreaItem",
  props: ["title","image", "price", "id"],
  computed: {
    url(){
      return `/shop-product/${this.id}`
    }
  }
}
</script>

<style scoped>

</style>