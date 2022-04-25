<template>
  <tr>
    <td>{{index+1}}</td>
    <td>{{date}}</td>
    <td>{{status}}</td>
    <td>${{price}}</td>
    <td><router-link :to="url" class="check-btn sqr-btn ">View</router-link></td>
  </tr>
</template>

<script>
export default {
name: "OrderItem",
  props: ["date", "status", "price", "index", "order", "order_id"],
  mounted() {
    console.log(this.order_id);
  },
  computed: {
    url(){
      return `/order-description/${this.order_id}`;
    }
  }
}
</script>

<style scoped>

</style>