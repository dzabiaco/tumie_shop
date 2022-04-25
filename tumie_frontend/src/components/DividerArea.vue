<template>
  <section class="bg-theme-color position-relative z-index-1">
    <div class="container-fluid p--0">
      <div class="row divider-style1">
        <div class="col-lg-3 col-xl-4">
          <div class="divider-thumb divider-thumb-left">
            <img src="../assets/img/photos/divider1.png" width="351" height="435" alt="Image-HasTech">
            <div class="shape-circle"></div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="divider-content text-center">
            <h5 class="sub-title">Save 50% Off</h5>
            <h2 class="title">Best Deal Offer</h2>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etlop.</p>
            <router-link class="btn-theme text-dark" to="/shop">Shop Now</router-link>
            <img class="shape-object" src="../assets/img/shape/object1.png" width="316" height="302" alt="Image-HasTech">
          </div>
        </div>
        <div class="col-lg-3 col-xl-4">
          <div class="divider-thumb divider-thumb-right">
            <img src="../assets/img/photos/divider2.png" width="488" height="447" alt="Image-HasTech">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "DividerArea"
}
</script>

<style scoped>

</style>