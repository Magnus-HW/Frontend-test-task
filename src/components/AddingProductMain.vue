<script setup>
import ProductGrid from "./ProductGrid.vue";
import TheForm from "./AddingForm/TheForm.vue";
import SortOptions from "./SortOptions.vue";
import { useProductsStore } from "@/stores/products.js";

const productsStore = useProductsStore();
productsStore.setDefauldData();
</script>

<template>
  <div class="adding-product">
    <header>Добавление товара</header>
    <div class="adding-product-main">
      <TheForm />
      <ProductGrid />
      <SortOptions />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adding-product {
  background: #e5e5e5;
  max-width: 1440px;
  height: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.adding-product-main {
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 3fr;
  gap: 1rem;
}
header {
  font-size: 1.75rem;
  line-height: 35px;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
