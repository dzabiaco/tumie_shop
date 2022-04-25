<template>
  <div class="col-lg-6">
    <!--== Start Order Details Accordion ==-->
    <div class="checkout-order-details-wrap">
      <div class="order-details-table-wrap table-responsive">
        <h2 class="title mb-25">Your order</h2>
        <table class="table">
          <thead>
          <tr>
            <th class="product-name">Product</th>
            <th class="product-total">Total</th>
          </tr>
          </thead>
          <tbody class="table-body">
          <tr class="cart-item" v-for="product in products" :key="product._id">
            <td class="product-name">{{product.title}}</td>
            <td class="product-total">${{product.price}}</td>
          </tr>

          </tbody>
          <tfoot class="table-foot">
          <tr class="cart-subtotal">
            <th>Subtotal</th>
            <td>${{totalPrice}}</td>
          </tr>
          <tr class="shipping">
            <th>Shipping</th>
            <td>Flat rate: $2.00</td>
          </tr>
          <tr class="order-total">
            <th>Total </th>
            <td>${{totalPrice+2}}</td>
          </tr>
          </tfoot>
        </table>
        <div class="shop-payment-method">
          <div id="PaymentMethodAccordion">
            <div class="card">
              <div id="itemTwo" class="collapse" aria-labelledby="check_payments2" data-bs-parent="#PaymentMethodAccordion">
                <div class="card-body">
                  <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="check_payments3">
                <h5 class="title" data-bs-toggle="collapse" data-bs-target="#itemThree" aria-controls="itemTwo" aria-expanded="false">
                  <label for="cash">
                    <input type="radio" id="cash" name="radio" v-model="payment" value="cash">
                    Cash on delivery
                  </label>
                </h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="check_payments4">
                <h5 class="title" data-bs-toggle="collapse" data-bs-target="#itemFour" aria-controls="itemTwo" aria-expanded="false">
                  <label for="paypal">
                    <input type="radio" id="paypal" name="radio" v-model="payment" value="paypal">PayPal Express Checkout
                  </label>
                </h5>
              </div>
            </div>
          </div>
          <p class="p-text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#/">privacy policy.</a></p>
          <div class="agree-policy">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" id="privacy" v-model="policy" class="custom-control-input visually-hidden">
              <label for="privacy" class="custom-control-label">I have read and agree to the website terms and conditions <span class="required">*</span></label>
            </div>
          </div>
          <router-link v-if="this.payment === 'cash' && !disableOrder"
                       to="/account/orders" class="btn-place-order" @click.prevent="submitOrder">Place order</router-link>
          <router-link v-if="this.payment === 'paypal' && !disableOrder"
                       to="/paypal" class="btn-place-order">Pay via PayPal</router-link>
        </div>
      </div>
    </div>
    <!--== End Order Details Accordion ==-->
  </div>
</template>

<script>
import { uuid } from 'uuidv4';
export default {
name: "CheckoutOrder",
  props:["first_name", "last_name", "username" ,"email", "address",
    "street","country", "city", "zip","phone","userId"],
  computed: {
    products(){
      return this.$store.getters["cart/products"];
    },
    totalPrice(){
      return this.$store.getters["cart/totalPrice"];
    },
    hasProducts(){
      return this.$store.getters["cart/hasProducts"];
    },
    disableOrder(){
      return !this.policy || !this.hasProducts || !this.first_name
          || !this.last_name || !this.street || !this.city || !this.zip || !this.phone;
    }
  },
  data(){
  return {
    payment: 'cash',
    policy:false
  }
  },
  methods: {
    submitOrder(){
      const order = {
        userId: this.userId,
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        email: this.email,
        address: this.address,
        phone: this.phone,
        payment: this.payment,
        orders: this.products,
        status: 'Pending',
        date: new Date().toLocaleString(),
        price: this.totalPrice,
        order_id: uuid()
      };
      this.$store.dispatch('cart/sendOrder',order);
      this.$store.dispatch('cart/resetCart');
    }
  }
}
</script>

<style scoped>
  #check_payments3 h5:before {
    content: none;
  }
  #check_payments4 h5:before {
    content: none;
  }

  #cash, #paypal{
    margin-right: 20px;
  }
</style>