<script setup>
import { computed } from "vue";
import { productsStore } from "../stores/products.js";
import { useRouter, useRoute } from "vue-router";

const store = productsStore();
const router = useRouter();
const route = useRoute();

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});

const addtoCart = () => {
  console.log("go to cart");
  store.addToCart(selectedProduct.value);
  router.push({ path: "/Cart" });
};
</script>

<template>
  <button @click="router.push({ path: '/' })">Back to Catalog</button>

  <div class="product">
    <div class="product-image">
      <img :src="selectedProduct.thumbnail" alt="" />
    </div>
    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
      <button @click="addtoCart">Add to Cart</button>
    </div>
  </div>
</template>
