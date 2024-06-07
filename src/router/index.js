import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import ProductDetails from "../views/ProductDEtails.vue";

const router = createRouter({
  history: createWebHistory(),
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
  ],
});

export default router;
