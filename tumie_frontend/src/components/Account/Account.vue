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
                <h2 class="title">Account</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Account</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start My Account Wrapper ==-->
      <section class="my-account-area">
        <div class="container pt--0 pb--0">
          <div class="row">
            <div class="col-lg-12">
              <div class="myaccount-page-wrapper">
                <div class="row">
                  <div class="col-lg-3 col-md-4">
                    <nav>
                      <div class="myaccount-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                        <router-link @click="click('dashboard')" to="/account"
                                     :class="selectedTab === 'dashboard' ? 'nav-link active' : 'nav-link'"
                                     id="dashboad-tab" data-bs-toggle="tab" data-bs-target="#dashboad" type="button" role="tab" aria-controls="dashboad" aria-selected="true">Dashboard</router-link>
                        <router-link @click="click('orders')" to="/account/orders"
                                     :class="selectedTab === 'orders' ? 'nav-link active' : 'nav-link'"
                                     data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false"> Orders</router-link>
<!--                        <router-link @click="click('payment')" to="/account/payment"-->
<!--                                     :class="selectedTab === 'payment' ? 'nav-link active' : 'nav-link'"-->
<!--                                     id="payment-method-tab" data-bs-toggle="tab" data-bs-target="#payment-method" type="button" role="tab" aria-controls="payment-method" aria-selected="false">Payment Method</router-link>-->
<!--                        <router-link @click="click('address')" to="/account/address"-->
<!--                                     :class="selectedTab === 'address' ? 'nav-link active' : 'nav-link'"-->
<!--                                     id="address-edit-tab" data-bs-toggle="tab" data-bs-target="#address-edit"-->
<!--                                     type="button" role="tab" aria-controls="address-edit"-->
<!--                                     aria-selected="false">address</router-link>-->
                        <router-link @click="click('details')" to="/account/details"
                                     :class="selectedTab === 'details' ? 'nav-link active' : 'nav-link'"
                                     id="account-info-tab" data-bs-toggle="tab" data-bs-target="#account-info" type="button" role="tab" aria-controls="account-info" aria-selected="false">Account Details</router-link>
                        <button class="nav-link" @click="logout" type="button">Logout</button>
                      </div>
                    </nav>
                  </div>
                  <div class="col-lg-9 col-md-8">
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
                        <div class="myaccount-content">
                          <router-view></router-view>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End My Account Wrapper ==-->

      <!--== Start Feature Area Wrapper ==-->
      <div class="feature-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="feature-icon-box">
                <div class="icon-box">
                  <img class="icon-img" src="../../assets/img/icons/f1.png" width="46" height="34" alt="Icon-HasTech">
                </div>
                <div class="content">
                  <h5 class="title">Free Shipping</h5>
                  <p>Capped at $39 per order</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="feature-icon-box">
                <div class="icon-box">
                  <img class="icon-img" src="../../assets/img/icons/f2.png" width="43" height="34" alt="Icon-HasTech">
                </div>
                <div class="content">
                  <h5 class="title">Card Payments</h5>
                  <p>12 Months Installments</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="feature-icon-box">
                <div class="icon-box">
                  <img class="icon-img" src="../../assets/img/icons/f3.png" width="39" height="39" alt="Icon-HasTech">
                </div>
                <div class="content">
                  <h5 class="title">Easy Returns</h5>
                  <p>Shop With Confidence</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="feature-icon-box">
                <div class="icon-box">
                  <img class="icon-img" src="../../assets/img/icons/f4.png" width="36" height="39" alt="Icon-HasTech">
                </div>
                <div class="content">
                  <h5 class="title">24/7 Support</h5>
                  <p>Contact 24 hours everyday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Feature Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutPage/AboutHeader";
import Preloader from "@/components/Preloader";


export default {
name: "Account",
  components: {AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  async mounted() {
    this.isLoading = false;
  },
  data(){
    return {
      isLoading: false,
      isActive: false,
      selectedTab: 'dashboard'
    }
  },
  computed: {
    userId(){
      return this.$store.getters.userId;
    }
  },
  methods: {
    async logout(){
      await this.$store.dispatch('logoutUser');
      await this.$router.push('/account-login');
    },
    click(type){
      this.selectedTab = type;
    }
  }
}
</script>

<style scoped>
.main-content{
    padding-top: 100px;
}
.router-link-exact-active, .router-link-active {
  background-color: #721b65;
  border-color: #721b65;
  color: #fff;
}
</style>