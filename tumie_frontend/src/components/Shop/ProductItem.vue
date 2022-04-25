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

      <!--== Start Product Single Area Wrapper ==-->
      <section class="product-area product-single-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="product-single-item">
                <div class="row">
                  <div class="col-lg-6">
                    <!--== Start Product Thumbnail Area ==-->
                    <div class="product-single-thumb">
                      <div class="swiper single-product-thumb single-product-thumb-slider">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <router-link class="lightbox-image" data-fancybox="gallery" to="selectedProduct.image">
                              <img :src="selectedProduct.image" width="570" height="675" alt="Image-HasTech">
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--== End Product Thumbnail Area ==-->
                  </div>
                  <div class="col-lg-6">
                    <!--== Start Product Info Area ==-->
                    <div class="product-single-info">
                      <h3 class="main-title">{{selectedProduct.title}}</h3>
                      <div class="prices">
                        <span class="price">${{selectedProduct.price}}</span>
                      </div>
                      <div class="rating-box-wrap">
                        <div class="rating-box">
                          <i class="fa fa-star" v-for="star in parseInt(selectedProduct.rating)" :key="star"></i>
                        </div>
                        <div class="review-status">
                          <a href="javascript:void(0)">Rating</a>
                        </div>
                      </div>
                      <p>{{selectedProduct.description}}</p>
                      <div class="product-single-meta">
                        <ul>
                          <li><span>SKU:</span> {{selectedProduct.product_code}}</li>
                        </ul>
                      </div>
                      <div class="product-quick-action">
<!--                        <div class="qty-wrap">-->
<!--                          <div class="pro-qty">-->
<!--                            <input type="text" title="Quantity" value="01">-->
<!--                          </div>-->
<!--                        </div>-->
                        <button @click="addToCart" type="button" class="btn-product-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    <!--== End Product Info Area ==-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End Product Single Area Wrapper ==-->

      <!--== Start Product Area Wrapper ==-->
      <section class="product-area product-default-area">
        <div class="container pt--0">
          <div class="row">
            <div class="col-12">
              <div class="section-title shape-center text-center">
                <h5 class="sub-title">Best PRODUCT</h5>
                <h2 class="title">Related Products</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <ProductRelated v-for="product in related_products"
                            :key="product._id"
                            :id="product._id"
                            :image="product.image"
                            :title="product.title"
                            :price="product.price"
            />
          </div>
        </div>
      </section>
      <!--== End Product Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import ProductRelated from "@/components/Shop/ProductRelated";
import Preloader from "@/components/Preloader";
import AboutHeader from "@/components/AboutPage/AboutHeader";
import { uuid } from 'uuidv4';
export default {
name: "ProductItem",
  components: {ProductRelated,Preloader, AboutHeader},
  beforeMount() {
    this.isLoading = true;
  },
  async created() {
    await this.$store.dispatch('products/loadProduct', this.$route.params.id);
    await this.$store.dispatch("products/getRelatedProducts", this.selectedProduct.category);
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify([]));
    }
  },
  async mounted() {
    this.isLoading = false;
    await this.$store.dispatch('products/loadProduct', this.$route.params.id);
    await this.$store.dispatch("products/getRelatedProducts", this.selectedProduct.category);
  },
  data(){
    return {
      isLoading: false
    }
  },
  computed: {
    selectedProduct(){
      return this.$store.getters["products/selectedProduct"];
    },
    related_products(){
      return this.$store.getters["products/relatedProduct"];
    }
  },
  methods: {
    addToCart(){
      const selectedProduct = {
        ...this.selectedProduct,
        uuid: uuid()
      };
      this.$store.dispatch('cart/addToCart', selectedProduct);
      // const cart_product = {
      //   ...this.selectedProduct
      // };
      //
      // const cart = JSON.parse(localStorage.getItem("cart"));
      // cart.push(cart_product);
      //
      // localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
}
</script>

<style scoped>
.main-content{
    padding-top: 100px;
}
</style>