<template>
  <Preloader v-if="isLoading"/>
  <div class="wrapper">
    <AboutHeader/>
    <main class="main-content">
      <!--== Start Page Header Area Wrapper ==-->
      <div class="page-header-area" data-bg-img="../../assets/img/photos/bg1.webp">
        <div class="container pt--0 pb--0">
          <div class="row">
            <div class="col-12">
              <div class="page-header-content">
                <h2 class="title">Register</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Register</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start My Account Area Wrapper ==-->
      <section class="account-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="register-form-content">
                <form @submit.prevent="registerUser">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="username">Username <span class="required">*</span></label>
                        <input id="username" class="form-control" type="text" v-model.trim="username">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Email address <span class="required">*</span></label>
                        <input id="email" class="form-control" type="email" v-model.trim="email">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="password">Password <span class="required">*</span></label>
                        <input id="password" class="form-control" type="password" v-model.trim="password">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group mb--0">
<!--                        <a class="btn-register" href="shop.html">Register</a>-->
                        <button class="btn-register">Register</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End My Account Area Wrapper ==-->

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
import Preloader from '../Preloader.vue';
import AboutHeader from "@/components/AboutPage/AboutHeader";
export default {
name: "AccountRegister",
  components:{AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
  data(){
    return {
      isLoading: false,
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser(){
      const userCredential = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("register", userCredential);
      this.$router.push('/account-login');
    }
  }
}
</script>

<style scoped>

</style>