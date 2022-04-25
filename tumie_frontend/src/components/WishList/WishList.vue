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
                <h2 class="title">Wishlist</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Wishlist</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start Wishlist Area Wrapper ==-->
      <section class="shopping-wishlist-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="shopping-wishlist-form table-responsive">
                <form action="#" method="post">
                  <table class="table text-center">
                    <thead>
                    <tr>
                      <th class="product-remove">&nbsp;</th>
                      <th class="product-thumbnail">&nbsp;</th>
                      <th class="product-name">Product name</th>
                      <th class="product-price">Unit price</th>
                      <th class="product-stock-status">Stock status</th>
                      <th class="product-add-to-cart">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="tbody-item">
                      <td class="product-remove">
                        <a class="remove" href="javascript:void(0)">×</a>
                      </td>
                      <td class="product-thumbnail">
                        <div class="thumb">
                          <a href="single-product.html">
                            <img src="../../assets/img/shop/product-mini/wishlist1.jpg" width="59" height="58" alt="Image-HasTech">
                          </a>
                        </div>
                      </td>
                      <td class="product-name">
                        <router-link class="title" to="/product">Condimentum posuere consectetur urna</router-link>
                      </td>
                      <td class="product-price">
                        <span class="price">$115.00</span>
                      </td>
                      <td class="product-stock-status">
                        <span class="wishlist-in-stock">In Stock</span>
                      </td>
                      <td class="product-add-to-cart">
                        <router-link class="btn-shop-cart" to="/shop-cart">Add to Cart</router-link>
                      </td>
                    </tr>
                    <tr class="tbody-item">
                      <td class="product-remove">
                        <a class="remove" href="javascript:void(0)">×</a>
                      </td>
                      <td class="product-thumbnail">
                        <div class="thumb">
                          <a href="single-product.html">
                            <img src="../../assets/img/shop/product-mini/wishlist2.jpg" width="59" height="58" alt="Image-HasTech">
                          </a>
                        </div>
                      </td>
                      <td class="product-name">
                        <a class="title" href="/product">Kaoreet lobortis sagittis laoreet</a>
                      </td>
                      <td class="product-price">
                        <span class="price">$95.00</span>
                      </td>
                      <td class="product-stock-status">
                        <span class="wishlist-in-stock">In Stock</span>
                      </td>
                      <td class="product-add-to-cart">
                        <router-link class="btn-shop-cart" to="/shop-cart">Add to Cart</router-link>
                      </td>
                    </tr>
                    <tr class="tbody-item">
                      <td class="product-remove">
                        <a class="remove" href="javascript:void(0)">×</a>
                      </td>
                      <td class="product-thumbnail">
                        <div class="thumb">
                          <a href="single-product.html">
                            <img src="../../assets/img/shop/product-mini/wishlist3.jpg" width="59" height="58" alt="Image-HasTech">
                          </a>
                        </div>
                      </td>
                      <td class="product-name">
                        <router-link class="title" to="/product">Nostrum exercitationem itae ipsum</router-link>
                      </td>
                      <td class="product-price">
                        <span class="price">$79.00</span>
                      </td>
                      <td class="product-stock-status">
                        <span class="wishlist-in-stock">In Stock</span>
                      </td>
                      <td class="product-add-to-cart">
                        <router-link class="btn-shop-cart" to="/shop-cart">Add to Cart</router-link>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End Wishlist Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutPage/AboutHeader";
import Preloader from "@/components/Preloader";

export default {
name: "WishList",
  components: {AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: false,
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>