<script setup></script>

<template>
  <div class="delete-button">
    <div class="delete-icon">
      <div class="lid"></div>
      <div class="handle"></div>
      <div class="vessel">
        <div class="rib 1"></div>
        <div class="rib 2"></div>
        <div class="rib 3"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-size: 0;
}
.delete-button {
  position: relative;
  width: 2rem;
  height: 2rem;
  background: #ff8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 10;
}
.delete-icon {
  display: inline-block;
  position: relative;
  height: 16px;
  width: 14px;
  transform: translate(-50%, -50%);
  top: 49%;
  left: 50%;
  & * {
    background: #ff8484;
  }
  .handle {
    width: 6px;
    height: 4px;
    transform: translate(-50%, -50%);
    top: 0%;
    left: 50%;
    border: 1px solid white;
    border-radius: 1.5px;
    z-index: 9;
  }
  .lid {
    transform: translate(-50%, -50%);
    width: 13px;
    height: 3px;
    border: 1px solid white;
    border-radius: 2px;
    top: 25%;
    left: 50%;
    z-index: 10;
  }
  .vessel {
    transform: translate(-50%, -50%);
    display: block;
    width: 10px;
    height: 14px;
    top: 15%;
    left: 50%;
    border: 1px solid white;
    border-radius: 2px;
    display: flex;
    justify-content: space-evenly;
    .rib {
      top: 30%;
      background: white;
      height: 7px;
      border: 0.5px solid white;
      border-radius: 1px;
    }
  }
}
</style>
