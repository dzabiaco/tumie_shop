<template>
  <div class="col-sm-6 col-xl-4">
    <!--== Start Product Item ==-->
    <div class="product-item">
      <div class="product-thumb">
        <router-link :to="getUrl">
          <img :src="image" width="270" height="320" alt="Image-HasTech">
        </router-link>
      </div>
      <div class="product-info">
        <h4 class="title"><router-link :to="getUrl">{{title}}</router-link></h4>
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
name: "ShortProduct",
  props: ["title", "price", "image", "id"],
  computed: {
    getUrl(){
      return `/shop-product/${this.id}`
    }
  }
}
</script>

<style scoped>

</style>