<template>
  <div class="body">
    <div class="left-top-area" @click="onClickLeft"></div>
  </div>
</template>

<script setup>
const onClickLeft = () => history.back();
</script>

<style scoped>
.body {
  position: relative;
  width: 100vw;
  height: 1800px;
  background-size: contain;
  background-image: url(../../assets/detail.png) ;
  margin: 0; /* 可以添加这一行，重置默认的 margin */
}
.left-top-area {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 40px; 
  height: 40px; 
  background: #00000025; 
}
</style>
