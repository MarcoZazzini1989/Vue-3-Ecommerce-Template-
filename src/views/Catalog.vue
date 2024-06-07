<script setup>
import { onMounted , ref , computed } from "vue"
import { productsStore } from "../stores/products.js"
import {useRouter, useRoute} from "vue-router";


const store = productsStore()
const router = useRouter()
const route = useRoute()


  onMounted( async  () => {
             await store.fetchProductsFromDB()
             console.log(`the component is now mounted.`)})
  
  
  const GoToProductpage = (id) =>{
    router.push({ name: 'Productview' , params: {id} })}

    



</script>

<template>
<div class="product-list">
<!---<h1>Catalog</h1>-->   
<div class="product" v-for="product in store.products" :key="product.id"
  @click="GoToProductpage(product.id)"    >
    <img :src="product.thumbnail"      > </img>
    <h2> Brand : {{ product.brand  }}  </h2>
    <p>Description : {{product.description}}</p>
    <p>Price : ${{product.price}}</p>
</div>
</div>
</template>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor:pointer;
}

.product {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0px 0px 14px 1px #e6e6e6;
}

.product image {
  width:70%;
}

</style>