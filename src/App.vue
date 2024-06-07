<script setup>
import { onMounted, ref, computed } from "vue";
import { productsStore } from "./stores/products.js";
import { useRouter, useRoute } from "vue-router";

const store = productsStore();
const router = useRouter();
const route = useRoute();
</script>

<template>
  <header>
    <div class="cart-items" @click="router.push({ path: '/Cart' })">
      <p>Items in Cart: {{ store.cart.length }}</p>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
