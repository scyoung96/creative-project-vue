<template>
<div>
  <div class="home">
    <h1>Welcome to the TCG Shop!</h1>
    <div class="search">
      <form class="pure-form">
        <input v-model="searchText" placeholder="Find a Card" />
      </form>
    </div>
  </div>

  <ProductList :products="products" />

</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
        searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
h1 {
  font-family: consolas;
  font-size:50px;
}
</style>
