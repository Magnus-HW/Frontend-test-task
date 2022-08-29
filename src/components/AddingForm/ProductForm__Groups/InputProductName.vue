<script setup>
import { ref } from "vue";
import ValidationMsg from "./ValidationMsg.vue";

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
  emit("update:modelValue", event.target.value);
  checkValidity(event);
}
</script>

<template>
  <div class="product-form__group">
    <label id="product-name__label" for="product-name">
      Наименование товара
      <div class="product-form__importance"></div>
    </label>
    <input
      id="product-name"
      type="text"
      placeholder="Введите наименование товара"
      @focusin="checkValidity($event)"
      @focusout="checkValidity($event)"
      @input="handleInput($event)"
      @keydown.enter="$event.target.blur()"
      :value="modelValue"
    />
    <ValidationMsg v-show="showValidationMsg" />
  </div>
</template>

<style lang="scss" scoped>
@import "./Product_Form__group.scss";
</style>
