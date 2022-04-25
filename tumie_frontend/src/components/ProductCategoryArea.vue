<template>
  <section class="product-area product-category-area bg-color-f2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title shape-center text-center">
            <h5 class="sub-title">TRENDING CATEGORIES</h5>
            <h2 class="title">Shop By Category</h2>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gutter-43">
        <div class="col">
          <!--== Start Product Category Item ==-->
          <div class="product-category-item">
            <div class="thumb">
              <router-link to="/shop"><img src="../assets/img/shop/category/1.png" width="200" height="200" alt="Image-HasTech"></router-link>
            </div>
            <div class="content">
              <h3 class="title"><router-link to="/shop">Cats</router-link></h3>
            </div>
          </div>
          <!--== End Product Category Item ==-->
        </div>
        <div class="col">
          <!--== Start Product Category Item ==-->
          <div class="product-category-item">
            <div class="thumb">
              <router-link to="/shop"><img src="../assets/img/shop/category/2.png" width="200" height="200" alt="Image-HasTech"></router-link>
            </div>
            <div class="content">
              <h3 class="title"><router-link to="/shop">Gold Fish</router-link></h3>
            </div>
          </div>
          <!--== End Product Category Item ==-->
        </div>
        <div class="col">
          <!--== Start Product Category Item ==-->
          <div class="product-category-item">
            <div class="thumb">
              <router-link to="/shop"><img src="../assets/img/shop/category/3.png" width="200" height="200" alt="Image-HasTech"></router-link>
            </div>
            <div class="content">
              <h3 class="title"><router-link to="/shop">Parrot</router-link></h3>
            </div>
          </div>
          <!--== End Product Category Item ==-->
        </div>
        <div class="col">
          <!--== Start Product Category Item ==-->
          <div class="product-category-item">
            <div class="thumb">
              <router-link to="/shop"><img src="../assets/img/shop/category/4.png" width="200" height="200" alt="Image-HasTech"></router-link>
            </div>
            <div class="content">
              <h3 class="title"><router-link to="/shop">Dog</router-link></h3>
            </div>
          </div>
          <!--== End Product Category Item ==-->
        </div>
        <div class="col">
          <!--== Start Product Category Item ==-->
          <div class="product-category-item">
            <div class="thumb">
              <router-link to="/shop"><img src="../assets/img/shop/category/5.png" width="200" height="200" alt="Image-HasTech"></router-link>
            </div>
            <div class="content">
              <h3 class="title"><router-link to="/shop">Rabbits</router-link></h3>
            </div>
          </div>
          <!--== End Product Category Item ==-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "ProductCategoryArea"
}
</script>

<style scoped>

</style>