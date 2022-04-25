<template>
  <div class="slider">
    <div class="container">
    <div class="row justify-content-between align-items-center">
      <div class="col-sm-6 col-md-6">
        <div class="title-box">
          <h2 class="title">A Greate Meal With Your Pet</h2>
        </div>
        <div class="btn-box">
          <router-link class="btn-theme text-dark" to="/shop">Shop Now</router-link>
        </div>
      </div>

      <div class="col-sm-6 col-md-6">
        <div class="thumb">
          <img src="https://template.hasthemes.com/tuime/tuime/assets/img/slider/slider-01.webp"
               alt="" width="585" height="579">
          <div class="shape-one"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name: "HomeSlider"
}
</script>

<style scoped>
  .slider{
    background-image: url("https://template.hasthemes.com/tuime/tuime/assets/img/slider/slider-bg.webp");
    height: 684px;
  }
  h2{
    color: #fff;
    font-size: 72px;
    font-weight: 800;
    line-height: 1.181;
    margin-bottom: 40px;
  }
</style>