<template>
  <section class="product-area product-banner-area">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="banner-product-single-item">
            <div class="thumb">
              <router-link to="/shop">
                <img src="../assets/img/shop/banner/1.jpg" width="570" height="300" alt="Image-HasTech">
              </router-link>
            </div>
            <div class="content">
              <h5 class="sub-title">50% Off</h5>
              <h5 class="title">Dog Food</h5>
              <router-link class="btn-theme btn-theme-color btn-sm" to="/shop">Shop Now</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="banner-product-single-item">
            <div class="thumb">
              <router-link to="/shop">
                <img src="../assets/img/shop/banner/2.jpg" width="570" height="300" alt="Image-HasTech">
              </router-link>
            </div>
            <div class="content">
              <h5 class="sub-title">50% Off</h5>
              <h5 class="title">Cat Food</h5>
              <router-link class="btn-theme btn-theme-color btn-sm" to="/shop">Shop Now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "ProductBannerArea"
}
</script>

<style scoped>

</style>