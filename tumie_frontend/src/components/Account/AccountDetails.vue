<template>
    <h3>Account Details</h3>
    <div class="account-details-form">
      <form @submit.prevent="updateAccount">
        <div class="row">
          <div class="col-lg-6">
            <div class="single-input-item">
              <label for="first-name" class="required">First Name</label>
              <input type="text" id="first-name" v-model.trim="first_name"/>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="single-input-item">
              <label for="last-name" class="required">Last Name</label>
              <input type="text" id="last-name" v-model.trim="last_name"/>
            </div>
          </div>
        </div>
        <div class="single-input-item">
          <label for="display-name" class="required">Username</label>
          <input type="text" id="display-name" v-model.trim="username"/>
        </div>
        <div class="single-input-item">
          <label for="email" class="required">Email Address</label>
          <input type="email" id="email" v-model.trim="email"/>
        </div>
        <fieldset>
          <legend>Password change</legend>
          <div class="row">
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="new-pwd" class="required">New Password</label>
                <input type="password" id="new-pwd" v-model.trim="password"/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="confirm-pwd" class="required">Confirm Password</label>
                <input type="password" id="confirm-pwd" v-model="repeat_password"/>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <div class="row">
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="current-address" class="required">Current Address</label>
                <input type="text" id="current-address" v-model.trim="street"/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="current-country" class="required">Country</label>
                <input type="text" id="current-country" v-model.trim="country"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="new-pwd" class="required">city</label>
                <input type="text" id="current-city" v-model.trim="city"/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="confirm-pwd" class="required">Current ZIP</label>
                <input type="text" id="current-zip" v-model.trim="zip"/>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Mobile</legend>
          <div class="row">
            <div class="col-lg-12">
              <div class="single-input-item">
                <label for="new-pwd" class="required">Mobile</label>
                <input type="text" id="current-mobile" v-model.number.trim="phone"/>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="single-input-item">
          <button class="check-btn sqr-btn">Save Changes</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
name: "AccountDetails",
  data() {
    return {
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
      phone: null
    }
  },
  async mounted() {
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
  computed: {
    userId(){
      return this.$store.getters.userId;
    },
    fullUserInfo(){
      return this.$store.getters.fullUserInfo;
    }
  },
  methods: {
    async updateAccount(){
      const user_data = {
        user_id: this.userId,
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        password: this.password,
        email: this.email,
        mobile: this.phone,
        address: {
          street: this.street,
          city: this.city,
          zip: this.zip,
          country: this.country
        }
      };

      await this.$store.dispatch("updateUser", user_data);

    }
  }
}
</script>

<style scoped>

</style>