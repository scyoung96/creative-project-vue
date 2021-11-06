<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/' + product.image">
      </div>
      <div class="set">
        <h2>Set: {{product.set}}</h2>
      </div>
      <div class="info">
        <button class="view_info" v-on:click="$root.$data.curr_card = product"><router-link to="/Info">View Info</router-link></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  margin-top: 3px;
  height: 275px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
}

.info {
  background: #008888;
  color: #000;
  padding: 10px 30px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.view_info a {
  text-decoration: none;
  color: white;
}

.set {
  display: flex;
  justify-content: center;
  font-size: 10px;
}

button {
  height: 30px;
  background: #000;
  color: white;
  border: 3px solid #008888;
}

.auto {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
}
</style>

