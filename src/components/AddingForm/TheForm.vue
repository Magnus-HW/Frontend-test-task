<script setup>
import InputProductName from "./ProductForm__Groups/InputProductName.vue";
import InputProductDescription from "./ProductForm__Groups/InputProductDescription.vue";
import InputProductPrice from "./ProductForm__Groups/InputProductPrice.vue";
import InputProductImage from "./ProductForm__Groups/InputProductImage.vue";
import { v4 as uuidv4 } from "uuid";

import { ref, computed } from "vue";
import { useProductsStore } from "@/stores/products.js";

const productsStore = useProductsStore();

const productName = ref("");
const productDescription = ref("");
const productImageLink = ref("");
const productPrice = ref("");

const formReady = computed(() => {
  console.log(productDescription.value);
  if (
    productName.value !== "" &&
    productImageLink.value !== "" &&
    productPrice.value !== ""
  ) {
    return true;
  }
  return false;
});

function addProductToStore() {
  const newProduct = {
    id: uuidv4(),
    name: productName.value,
    description: productDescription.value,
    imageLink: productImageLink.value,
    price: Number(productPrice.value.replace(/\D/g, "")),
  };
  productName.value = "";
  productDescription.value = "";
  productImageLink.value = "";
  productPrice.value = "";
  productsStore.addNewProduct(newProduct);
}
</script>

<template>
  <div class="product-form__container">
    <div class="product-form">
      <form>
        <InputProductName v-model="productName" />
        <InputProductDescription v-model="productDescription" />
        <InputProductImage v-model="productImageLink" />
        <InputProductPrice v-model="productPrice" />
        <button
          type="submit"
          :class="{ ready: formReady }"
          @click.prevent="addProductToStore"
        >
          Добавить товар
        </button>
      </form>
    </div>
  </div>
</template>
:disabled="!formReady"
<style lang="scss" scoped>
.product-form {
  position: sticky;
  top: 1.5rem;
  width: 100%;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  button {
    margin-top: 1.5rem;
    width: 100%;
    background: #eeeeee;
    color: #b4b4b4;
    border: none;
    border-radius: 10px;
    padding: 0.65rem;
    font-size: 12px;
    letter-spacing: -0.02em;
  }
  .ready {
    background: #7bae73;
    color: white;
  }
}
</style>
