<template>
<div class="content">
  <h1>Cart</h1>
  <div v-if="this.$root.$data.cart.length > 0">
  <CartList :products="cart" />
  </div>
  <div v-else>
	<p>Your cart is empty</p>
  </div>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Browse',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
      
  }
}
</script>

<style scoped>
h1 {
	text-align: center;
}
</style>
