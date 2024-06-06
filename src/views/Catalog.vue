<script setup>
import { onMounted , ref } from "vue"
import prova from "../stores/prova.vue"
import { productsStore } from "../stores/products.js"

const store = productsStore()


onMounted(() => {
  console.log(`the component is now mounted.`)
  store.fetchProductsFromDB()
})



</script>

<template>
  <div>
    <h1>Catalog</h1>
    <prova />
<div class="products" v-for="product in productsStore.products" :key="product.id">
    <img :src="product.thumbnail"      > </img>
    <h2> Brand : {{ product.brand  }}  </h2>

</div>


  </div>
</template>