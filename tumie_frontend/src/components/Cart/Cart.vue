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
                <h2 class="title">Cart</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Cart</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start Blog Area Wrapper ==-->
      <section class="shopping-cart-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="shopping-cart-form table-responsive">
                  <table class="table text-center">
                    <thead>
                    <tr>
                      <th class="product-remove">&nbsp;</th>
                      <th class="product-thumbnail">&nbsp;</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <CartItem v-for="product in products"
                              :key="product._id"
                              :id="product._id"
                              :title="product.title"
                              :image="product.image"
                              :price="product.price"
                              :uuid="product.uuid"
                    />
<!--                    <tr class="tbody-item-actions">-->
<!--                      <td colspan="6">-->
<!--                        <button type="submit" :class="!!hasProducts? 'btn-update-cart disable' :'btn-update-cart' " :disabled="!!hasProducts">Update cart</button>-->
<!--                      </td>-->
<!--                    </tr>-->
                    </tbody>
                  </table>

              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="cart-totals-wrap">
                <h2 class="title">Cart totals</h2>
                <table>
                  <tbody>
                  <tr class="cart-subtotal">
                    <th>Subtotal</th>
                    <td>
                      <span class="amount">${{totalPrice}}</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div class="text-end">
                  <router-link to="/shop-checkout" class="checkout-button">Proceed to checkout</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End Blog Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutPage/AboutHeader";
import Preloader from "@/components/Preloader";
import CartItem from "@/components/Cart/CartItem";

export default {
name: "Cart",
  components: {CartItem, AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    products (){
      return this.$store.getters["cart/products"];
    },
    hasProducts(){
      return this.$store.getters["cart/hasProducts"];
    },
    totalPrice(){
      return this.$store.getters["cart/totalPrice"];
    }
  }
}
</script>

<style scoped>
.main-content{
    padding-top: 100px;
}
</style>