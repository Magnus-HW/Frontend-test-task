<script setup>
import { ref } from "vue";
import ValidationMsg from "./ValidationMsg.vue";
import { delimiter } from "@/utility/utility.js";
defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const showValidationMsg = ref(false);

function checkValidity(event) {
  if (event.target.value == "") {
    showValidationMsg.value = true;
    return;
  }
  showValidationMsg.value = false;
}

function handleInput(event) {
  checkValidity(event);

  if (event.target.value == "") {
    emit("update:modelValue", "");
    return;
  }

  //3 digit delimetr
  const newValue = delimiter(event.target.value);

  emit("update:modelValue", newValue);
}
</script>

<template>
  <div class="product-form__group">
    <label id="product-price__label" for="product-price">
      Цена товара
      <div class="product-form__importance"></div>
    </label>
    <input
      id="product-price"
      type="text"
      placeholder="Введите цену товара"
      :value="modelValue"
      @focusin="checkValidity($event)"
      @focusout="checkValidity($event)"
      @input="handleInput($event)"
      @keydown.enter="$event.target.blur()"
    />
    <ValidationMsg v-show="showValidationMsg" />
  </div>
</template>

<style lang="scss" scoped>
@import "./Product_Form__group.scss";
</style>
