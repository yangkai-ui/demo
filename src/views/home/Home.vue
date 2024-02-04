<template>
  <div class="body" @click="navToDetail"></div>
  
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const navToDetail = () => {
  console.log("跳转");
  router.push("/detail");
};
</script>

<style scoped>
.body {
  width: 100vw;
  height: 900px;
  background: url(../../assets/bg.png) no-repeat center;
  background-size: cover;
}


</style>
