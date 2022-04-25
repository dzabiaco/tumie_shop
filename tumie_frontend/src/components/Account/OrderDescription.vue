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
                    <th class="product-id">Order ID</th>
                    <th class="product-thumbnail">Image</th>
                    <th class="product-name">Product</th>
                    <th class="product-price">Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  <OrderItemDescription v-for="product in finded[0].orders"
                            :key="product._id"
                            :id="product._id"
                            :order_id="product.order_id"
                            :title="product.title"
                            :image="product.image"
                            :price="product.price"
                            :uuid="product.uuid"
                            :product="product"
                  />
                  </tbody>
                </table>

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
import OrderItemDescription from "@/components/Account/OrderItemDescription";

export default {
name: "OrderDescription",
  components: {OrderItemDescription, AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  async created() {
    await this.$store.dispatch("getOrder", {
      user_id: this.userId,
      order_id: this.$route.params
    });
    console.log(`FOUNDED`);
    console.log(this.finded[0].orders);
  },
  async mounted() {
    this.isLoading = false;
    await this.$store.dispatch("getOrder", {
      user_id: this.userId,
      order_id: this.$route.params
    });
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    userId(){
      return this.$store.getters.userId;
    },
    fullUserInfo(){
      return this.$store.getters.fullUserInfo;
    },
    selectedOrder(){
       return this.$store.getters.selectedOrder;
    },
    finded(){
      return this.selectedOrder.filter(order => {
        return order.order_id === this.$route.params.id
      });
    }
  }
}
</script>

<style scoped>

</style>