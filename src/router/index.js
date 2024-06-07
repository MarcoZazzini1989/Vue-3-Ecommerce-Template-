import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import ProductDetails from "../views/ProductDEtails.vue";
import Cart from "../views/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Catalog,
    },
    {
      path: "/product/:id",
      name: "Productview",
      component: ProductDetails,
    },
    {
      path: "/Cart",
      name: "Cartview",
      component: Cart,
    },
  ],
});

export default router;
