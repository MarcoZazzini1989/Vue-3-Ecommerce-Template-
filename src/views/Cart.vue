<script setup>
import { onMounted, ref, computed } from "vue";
import { productsStore } from "../stores/products.js";
import { useRouter, useRoute } from "vue-router";

const store = productsStore();
const router = useRouter();
const route = useRoute();

const removeFromCart = (id) => {
  store.removeFromCart(id);
};
</script>

<template>
  <button @click="router.push({ path: '/' })">Back to catalog</button>
  <div v-if="!store.cart.length" style="text-align: center">
    <h1>Empty Cart</h1>
    <button @click="router.push({ path: '/' })">Back to catalog</button>
  </div>

  <div class="cart-items" v-else>
    <div class="cart-item" v-for="item in store.cart" :key="item.id">
      <div class="item-details">
        <img :src="item.thumbnail" alt="" />
        <span>Brand: {{ item.brand }}</span>
        <span>Category: {{ item.category }}</span>
        <span>Price: ${{ item.price }}</span>
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
}
</style>
