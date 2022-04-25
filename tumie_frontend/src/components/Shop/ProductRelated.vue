<template>
  <div class="col-sm-6 col-lg-3">
    <!--== Start Product Item ==-->
    <div class="product-item">
      <div class="product-thumb">
        <router-link :to="getUrl">
          <img :src="image" width="270" height="320" alt="Image-HasTech">
        </router-link>
      </div>
      <div class="product-info">
        <h4 class="title"><router-link :to="getUrl">Fusion Backpack</router-link></h4>
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
name: "ProductRelated",
  props: ["id", "title", "image", "price"],
  computed: {
    relatedProduct(){
      return this.$store.getters["products/relatedProduct"];
    },
    getUrl(){
      return `/shop-product/${this.id}`;
    }
  }
}
</script>

<style scoped>

</style>