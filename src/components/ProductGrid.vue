<script setup>
import TheProduct from "./TheProduct/TheProduct.vue";
import { useProductsStore } from "@/stores/products.js";

const productsStore = useProductsStore();
productsStore.setDefauldData();
</script>

<template>
  <div class="products-grid">
    <TheProduct
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style lang="scss" scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(420px, 300px);
  grid-gap: 1rem;
  // padding: 0.5rem;
}
</style>
