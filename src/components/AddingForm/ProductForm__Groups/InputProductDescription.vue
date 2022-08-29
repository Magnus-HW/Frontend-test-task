<script setup>
defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function handleInput(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div class="product-form__group">
    <label id="product-form__description-label" for="product-form__description">
      Описание товра
    </label>
    <textarea
      id="product-form__description"
      type="text"
      placeholder="Введите описание товара"
      rows="6"
      @input="handleInput($event)"
      @keydown.enter="$event.target.blur()"
      :value="modelValue"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
@import "./Product_Form__group.scss";
</style>
