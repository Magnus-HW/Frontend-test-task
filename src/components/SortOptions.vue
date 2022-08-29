<script setup>
import { useProductsStore } from "@/stores/products.js";
const productStore = useProductsStore();

function sortProducts(event) {
  console.log(event.target.value);
  switch (event.target.value) {
    case "0":
      productStore.defaultOrder();
      break;
    case "1":
      productStore.sortByIncreasingPrice();
      break;
    case "2":
      productStore.sortByDecreasingPrice();
      break;
    case "3":
      productStore.sortByName();
      break;
  }
}
</script>

<template>
  <div class="sort-options">
    <select class="sort-options__select" @change="sortProducts($event)">
      <option class="sort-options__option" value="0" selected>
        По умолчанию
      </option>
      <option class="sort-options__option" value="1">Цена &#9660;</option>
      <option class="sort-options__option" value="2">Цена &#9650;</option>
      <option class="sort-options__option" value="3">По названию</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.sort-options {
  position: absolute;
  top: -4.5rem;
  right: 0;
  display: inline;
  &::after {
    content: "\203A";
    position: absolute;
    top: 5px;
    right: 1.2rem;
    font-size: 1.5rem;
    transform: rotate(90deg);
    pointer-events: none;
  }
}
.sort-options__select {
  padding: 1rem 3rem 1rem 1rem;
  appearance: none;
  &,
  .sort-options__option {
    // height: 2.25rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
}
</style>
