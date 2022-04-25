<template>
  <tr class="tbody-item">
    <td class="product-remove">
      <span @click="removeItem(this.uuid)" class="remove" style="cursor: pointer;">×</span>
    </td>
    <td class="product-thumbnail">
      <div class="thumb">
        <router-link to="/product">
          <img :src="image" width="75" height="75" alt="Image-HasTech">
        </router-link>
      </div>
    </td>
    <td class="product-name">
      <router-link class="title" to="/product">{{title}}</router-link>
    </td>
    <td class="product-price">
      <span class="price">${{price}}</span>
    </td>
  </tr>
</template>

<script>
export default {
name: "CartItem",
  props:["id", "title", "price", "image", "uuid"],
  methods: {
    removeItem(uuid){
      this.$store.dispatch('cart/removeFromCart', uuid);
    }
  }
}
</script>

<style scoped>

</style>