<script setup>
import DeleteButton from "./DeleteButton.vue";
import { useProductsStore } from "@/stores/products.js";
import { ref } from "vue";

defineProps({
  product: {
    id: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "No provided descrition",
      require: false,
    },
    imageLink: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
});
const productsStore = useProductsStore();

const showDeleteBtn = ref(false);
</script>

<template>
  <div
    class="product"
    @mouseover="showDeleteBtn = true"
    @mouseleave="showDeleteBtn = false"
  >
    <div class="product-img-container">
      <img
        class="product-img-container__img"
        :src="product.imageLink"
        alt="product-image"
      />
    </div>
    <div class="product__info">
      <div class="product-info__title">{{ product.name }}</div>
      <div class="product-info__description">
        {{ product.description }}
      </div>

      <div class="product-info__price">
        {{ new Intl.NumberFormat("ru").format(product.price) }} руб.
      </div>
    </div>
    <DeleteButton
      v-show="showDeleteBtn"
      @click="productsStore.deleteProduct(product.id)"
    />
  </div>
</template>

<style lang="scss" scoped>
.product {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  .product-img-container {
    height: 50%;
    .product-img-container__img {
      border-radius: 4px 4px 0 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .product__info {
    margin: 1rem 1rem 1rem 1rem;
    height: 100%;
    line-height: 20px;
    .product-info__title {
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 25px;
      margin-bottom: 5.5%;
    }
    .product-info__description {
      max-height: 50%;
      padding-bottom: 3rem;
      overflow: hidden;
    }
    .product-info__price {
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 30px;
      position: absolute;
      bottom: 0;
    }
  }
  .delete-button {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 2rem;
    height: 2rem;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 10px;
  }
}
</style>
