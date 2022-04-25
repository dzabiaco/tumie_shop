<template>
  <Preloader v-if="isLoading"/>
  <div class="wrapper">
    <AboutHeader/>
    <main class="main-content">
      <!--== Start Page Header Area Wrapper ==-->
      <div class="page-header-area" data-bg-img="assets/img/photos/bg1.webp">
        <div class="container pt--0 pb--0">
          <div class="row">
            <div class="col-12">
              <div class="page-header-content">
                <h2 class="title">Products</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Products</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start Product Area Wrapper ==-->
      <section class="product-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="shop-top-bar">
                <div class="shop-top-left">
                  <p class="pagination-line"><router-link to="/"></router-link> Founded Products
                    <router-link to="/">{{productsLength}}</router-link>
                  </p>
                </div>

                <div class="shop-top-right">
                  <div class="shop-sort">
                    <span>Sort By :</span>
                    <select class="form-select" @change="sortByOption($event)" aria-label="Sort select example">
                      <option selected value="default">Default</option>
                      <option value="popularity">Popularity</option>
                      <option value="newness">Newness</option>
                      <option value="price">Price High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row flex-md-row-reverse justify-content-between">
            <div class="col-xl-9">
              <div class="row">
                <div class="col-12">
                  <div class="banner-product-single-style2-item">
                    <div class="thumb">
                      <router-link to="/shop">
                        <img src="../../assets/img/shop/banner/3.jpg" width="870" height="247" alt="Image-HasTech">
                      </router-link>
                    </div>
                    <div class="content">
                      <h5 class="sub-title">-25%  Off </h5>
                      <h5 class="title">Pet Food, Medicin & Shop With Us</h5>
<!--                      <a class="btn-theme-link" href="shop.html">Shop Now</a>-->
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                      <div class="row">

                        <ShortProduct v-for="product in products"
                                      :id="product._id"
                                      :key="product._id"
                                      :title="product.title"
                                      :price="product.price"
                                      :image="product.image"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="shop-sidebar">
                <div class="shop-sidebar-search">
                  <div class="sidebar-search-form">
                    <form @submit.prevent="search">
                      <input type="search" v-model.trim="search_value" placeholder="Search Here">
                      <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                  </div>
                </div>

<!--                <div class="shop-widget shop-sidebar-price-range">-->
<!--                  <h4 class="sidebar-title">Price Filter</h4>-->
<!--                  <div class="range-filter">-->
<!--                    <div class="price-controls">-->
<!--                      от <input v-model="min_price" class="min-price" @change="sortByPrice" type="text">-->
<!--                      <br><br>-->
<!--                      до <input v-model="max_price" class="max-price" @change="sortByPrice" type="text">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

                <div class="shop-widget shop-sidebar-category">
                  <h4 class="sidebar-title">Categories</h4>
                  <div class="sidebar-category">
                    <ul class="category-list mb--0">
                      <li @click="loadProductsFromCategory('all')"><a style="cursor: pointer;">All </a></li>
                      <li @click="loadProductsFromCategory('cat')"><a style="cursor: pointer;">Cats </a></li>
                      <li @click="loadProductsFromCategory('fish')"><a style="cursor: pointer;">Gold Fish </a></li>
                      <li @click="loadProductsFromCategory('bird')"><a style="cursor: pointer;">Parrot </a></li>
                      <li @click="loadProductsFromCategory('dog')"><a style="cursor: pointer;">Dog </a></li>
                      <li @click="loadProductsFromCategory('rabbits')"><a style="cursor: pointer;">Rabbits </a></li>
                    </ul>
                  </div>
                </div>

<!--                <div class="shop-widget shop-sidebar-size">-->
<!--                  <h4 class="sidebar-title">Size</h4>-->
<!--                  <div class="sidebar-size">-->
<!--                    <div class="size-list">-->
<!--&lt;!&ndash;                      class="active"&ndash;&gt;-->
<!--                      <div @click="filterBySize('S')" :class="smallSizeActive ? 'active' : null">S</div>-->
<!--                      <div @click="filterBySize('M')" :class="mediumSizeActive ? 'active' : null">M</div>-->
<!--                      <div @click="filterBySize('L')" :class="largeSizeActive ? 'active' : null">L</div>-->
<!--                      <div @click="filterBySize('XL')" :class="extraSizeActive ? 'active' : null">XL</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End Product Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutPage/AboutHeader";
import Preloader from "@/components/Preloader";
import ShortProduct from "@/components/Shop/ShortProduct";
export default {
name: "Shop",
  components: {AboutHeader, Preloader, ShortProduct},
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
    this.$store.dispatch("products/loadProducts");
  },
  data() {
    return {
      isLoading: false,
      smallSizeActive: false,
      mediumSizeActive: false,
      largeSizeActive: false,
      extraSizeActive: false,
      search_value: '',
      min_price: 115,
      max_price: 1220
    }
  },
  methods: {
    search(){
      if(this.search_value === ''){
        return;
      }
      this.$store.dispatch('products/searchProduct', this.search_value)
    },
    sortByOption(event){
      const value = event.target.value;
      if(value === 'default'){
        this.$store.dispatch('products/loadProducts');
      }
      else if(value === 'popularity'){
        this.$store.dispatch('products/sortByPopularity')
      }
      else if(value === 'newness'){
        this.$store.dispatch('products/sortByNewness');
      }
      else if(value === 'price'){
        this.$store.dispatch('products/sortByPrice');
      }
      else {
        this.$store.dispatch('products/loadProducts');
      }
    },
    sortByPrice(){
      if(this.min_price === '' || this.max_price === ''){
        return
      }
      const prices = {
        minPrice: +this.min_price,
        maxPrice: +this.max_price
      };
      console.log(prices);
      this.$store.dispatch('products/filterByPrice', prices);
    },

    // filterBySize(size){
    //   let products = this.$store.getters["products/products"];
    //
    //   if(size === "small") {
    //     this.smallSizeActive = true;
    //     this.mediumSizeActive = false;
    //     this.largeSizeActive = false;
    //     this.extraSizeActive = false;
    //   }
    //   else if(size === "medium"){
    //     this.mediumSizeActive = true;
    //     this.smallSizeActive = false;
    //     this.largeSizeActive = false;
    //     this.extraSizeActive = false;
    //   }
    //   else if(size === "large"){
    //     this.largeSizeActive = true;
    //     this.smallSizeActive = false;
    //     this.mediumSizeActive = false;
    //     this.extraSizeActive = false;
    //   }
    //   else if(size === "extralarge"){
    //     this.extraSizeActive = true;
    //     this.smallSizeActive = false;
    //     this.mediumSizeActive = false;
    //     this.largeSizeActive = false;
    //   }
    //   else {
    //     this.smallSizeActive = false;
    //     this.mediumSizeActive = false;
    //     this.largeSizeActive = false;
    //     this.extraSizeActive = false;
    //   }
    //
    // },

    async loadProductsFromCategory(category){
      if(category === 'all'){
        await this.$store.dispatch('products/loadProducts');
      }
      await this.$store.dispatch('products/getProductsFromCategory', category);
    }
  },
  computed: {
    products (){
      return this.$store.getters["products/products"];
    },
    productsLength(){
      return this.$store.getters["products/productsLength"]
    },
    allProductsLength(){
      return this.$store.getters["products/allProductsLength"];
    }
  }
}
</script>

<style scoped>
.range-filter {
  padding-top:10px;
  width:240px;
  margin:auto;
  margin-bottom:10px;
}
.range-controls {
  position:relative;
  height:80px;
  margin-bottom:15px;
  padding:0 30px;
  background:#34495e;
  border-radius:5px;
  overflow:hidden;
}
.scale {
  margin-top:39px;
  height:2px;
  background:#d7dcde;
}
.bar{
  height:2px;
  background:#00ca74;
}
.toggle {
  position:absolute;
  top:30px;
  left:30px;
  width:4px;
  height:4px;
  border:8px solid white;
  background:#ababab;
  cursor:pointer;
  border-radius:50%;
}
.min-toggle {
  left:70px;
}
.max-toggle {
  left:165px;
}
.price-controls input{
  width:100px;
  padding:8px 10px;
  margin-left:10px;
  border:none;
  background:#34495e;
  font-size:16px;
  font-family:"Tahoma", sans-serif;
  text-align:center;
  color:#283136;
  border-radius:5px;
  color:white;
}

.min-price, .max-price {
  width:100%;
  margin-right:14px;
}

.main-content{
    padding-top: 100px;
}
</style>