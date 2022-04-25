<template>
  <tr class="tbody-item">
    <td class="product-remove">
      <span>{{id}}</span>
    </td>
    <td class="product-thumbnail">
      <div class="thumb">
        <router-link :to="url">
          <img :src="image" width="75" height="75" alt="Image-HasTech">
        </router-link>
      </div>
    </td>
    <td class="product-name">
      <router-link class="title" :to="url">{{title}}</router-link>
    </td>
    <td class="product-price">
      <span class="price">${{price}}</span>
    </td>
  </tr>
</template>

<script>
export default {
name: "OrderItemDescription",
  props:["id", "order_id", "title", "price", "image", "uuid", "product"],
  computed: {
    url(){
      return `/shop-product/${this.id}`
    }
  }
}
</script>

<style scoped>

</style>