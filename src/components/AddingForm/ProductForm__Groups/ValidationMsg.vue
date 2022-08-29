<script setup>
defineProps({
  validationMsg: {
    default: "Поле является обязательным",
    type: String,
  },
});
</script>

<template>
  <div class="product-form__group__validation-msg">
    {{ validationMsg }}
  </div>
</template>

<style scoped></style>
