<template>
    <h3>Orders</h3>
    <div class="myaccount-table table-responsive text-center">
      <table class="table table-bordered">
        <thead class="thead-light">
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <OrderItem v-for="(order, index) in userOrders"
                   :key="order._id"
                   :date="order.date"
                   :status="order.status"
                   :price="order.price"
                   :order_id="order.order_id"
                   :index="index"
        />
        </tbody>
      </table>
    </div>
</template>

<script>
import OrderItem from "@/components/Account/OrderItem";
export default {
name: "Orders",
  components: {OrderItem},
  async created() {
    await this.$store.dispatch('loadFullUser', this.userId);
    await this.$store.dispatch('getOrders', this.userId);
  },
  async mounted(){
    await this.$store.dispatch('loadFullUser', this.userId);
    await this.$store.dispatch('getOrders', this.userId);
  },
  computed: {
    userId(){
      return this.$store.getters.userId;
    },
    fullUserInfo(){
      return this.$store.getters.fullUserInfo;
    },
    userOrders(){
      return this.$store.getters.userOrders.orders;
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>