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
                <h2 class="title">Checkout</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Checkout</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start Shopping Checkout Area Wrapper ==-->
      <section class="shopping-checkout-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <!--== Start Billing Accordion ==-->
              <div class="checkout-billing-details-wrap">
                <h2 class="title">Billing details</h2>
                <div class="billing-form-wrap">
                  <form action="#" method="post">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="f_name">First name <abbr class="required" title="required">*</abbr></label>
                          <input id="f_name" type="text" v-model.trim="first_name"  class="form-control">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="l_name">Last name <abbr class="required" title="required">*</abbr></label>
                          <input id="l_name" type="text" v-model.trim="last_name"  class="form-control">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="country">Country <abbr class="required" title="required">*</abbr></label>
                          <select id="country" class="form-control" v-model.trim="country">
                            <option v-for="country in countries" :key="country.id">{{country.name}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="street-address">Street address <abbr class="required" title="required">*</abbr></label>
                          <input id="street-address" type="text" v-model.trim="street"  class="form-control" placeholder="House number and street name">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="town">Town / City <abbr class="required" title="required">*</abbr></label>
                          <input id="town" type="text" v-model.trim="city"  class="form-control">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="district">District <abbr class="required" title="required">*</abbr></label>
                          <select id="district" v-model="country" class="form-control">
                            <option v-for="country in countries" :key="country.id">{{country.name}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="pz-code">Postcode / ZIP (optional)</label>
                          <input id="pz-code" type="text" v-model.trim="zip" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="phone">Phone (optional)</label>
                          <input id="phone" type="text"  v-model.trim="phone" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group" data-margin-bottom="30">
                          <label for="email">Email address <abbr class="required" title="required">*</abbr></label>
                          <input id="email" type="text" v-model.trim="email" class="form-control">
                        </div>
                      </div>
                      <div id="CheckoutBillingAccordion2" class="col-md-12">
                        <div id="CheckoutTwo" class="collapse" data-margin-top="30"  data-bs-parent="#CheckoutBillingAccordion2">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="f_name2">First name <abbr class="required" title="required">*</abbr></label>
                                <input id="f_name2" type="text" v-model.trim="first_name"  class="form-control">
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="l_name2">Last name <abbr class="required" title="required">*</abbr></label>
                                <input id="l_name2" type="text" v-model.trim="last_name"  class="form-control">
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="country2">Country <abbr class="required" title="required">*</abbr></label>
                                <select id="country2" class="form-control">
                                  <option>Bangladesh</option>
                                  <option>Afghanistan</option>
                                  <option>Albania</option>
                                  <option>Algeria</option>
                                  <option>Armenia</option>
                                  <option>India</option>
                                  <option>Pakistan</option>
                                  <option>England</option>
                                  <option>London</option>
                                  <option>London</option>
                                  <option>China</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="street-address2-3">Street address <abbr class="required" title="required">*</abbr></label>
                                <input id="street-address2-3" type="text" v-model.trim="street"  class="form-control" placeholder="House number and street name">
                              </div>
                              <div class="form-group">
                                <label for="street-address2-2" class="visually-hidden">Street address 2 <abbr class="required" title="required">*</abbr></label>
                                <input id="street-address2-2" type="text"  class="form-control" placeholder="Apartment, suite, unit etc. (optional)">
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="town3">Town / City <abbr class="required" title="required">*</abbr></label>
                                <input id="town3" type="text" v-model.trim="city"  class="form-control">
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="district2">District <abbr class="required" title="required">*</abbr></label>
                                <select id="district2" v-model.trim="country" class="form-control">
                                  <option v-for="country in countries" :key="country.id">{{country.name}}</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="pz-code2">Postcode / ZIP (optional)</label>
                                <input id="pz-code2" type="text" v-model="zip"  class="form-control">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!--== End Billing Accordion ==-->
            </div>
            <CheckoutOrder
                :first_name="first_name"
                :last_name="last_name"
                :username="username"
                :email="email"
                :address="address"
                :street="street"
                :country="country"
                :city="city"
                :zip="zip"
                :phone="phone"
                :userId="userId"
            />
          </div>
        </div>
      </section>
      <!--== End Shopping Checkout Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutPage/AboutHeader";
import Preloader from "@/components/Preloader";
import CheckoutOrder from "@/components/Checkout/CheckoutOrder";

export default {
name: "Checkout",
  components: {CheckoutOrder, AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  async created(){
    await this.$store.dispatch('loadFullUser', this.userId);
    this.first_name = this.fullUserInfo.first_name;
    this.last_name = this.fullUserInfo.last_name;
    this.username = this.fullUserInfo.username;
    this.email = this.fullUserInfo.email;
    this.address = this.fullUserInfo.address;
    this.street = this.fullUserInfo.address.street;
    this.city = this.fullUserInfo.address.city;
    this.zip = this.fullUserInfo.address.zip;
    this.phone = this.fullUserInfo.mobile;
    this.country = this.fullUserInfo.address.country;
  },
  mounted() {
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: false,
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      repeat_password: '',
      address: '',
      street: '',
      city: '',
      zip: '',
      country: '',
      phone: null,
      countries: [
        {id: 1, name: 'Bangladesh'},
        {id: 2, name: 'Afghanistan'},
        {id: 3, name: 'Albania'},
        {id: 4, name: 'Albania'},
        {id: 5, name: 'Algeria'},
        {id: 6, name: 'Armenia'},
        {id: 7, name: 'India'},
        {id: 7, name: 'Pakistan'},
        {id: 8, name: 'England'},
        {id: 9, name: 'China'},
        {id: 10, name: 'Moldova'},
      ]
    }
  },
  computed: {
    userId(){
      return this.$store.getters.userId;
    },
    fullUserInfo(){
      return this.$store.getters.fullUserInfo;
    }
  }
}
</script>

<style scoped>
.main-content{
  padding-top: 100px;
}
</style>