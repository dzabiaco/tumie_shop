<template>
  <h3>Dashboard</h3>
  <div class="welcome">
    <p>Hello, <strong>{{username.toUpperCase()}}</strong>
      (If Not <strong>{{username.toUpperCase()}} !</strong>
      <router-link @click="logout" to="/account-login" class="logout"> Logout</router-link>)</p>
  </div>
  <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
</template>

<script>
export default {
name: "Dashboard",
  computed: {
    username(){
      return this.$store.getters.username;
    }
  },
  methods: {
    async logout(){
      await this.$store.dispatch('logout');
      await this.$router.push('/account-login');
    }
  }
}
</script>

<style scoped>

</style>