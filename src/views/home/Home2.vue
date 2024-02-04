<template>
  <div class="body">
    <div class="navbar">
      <p>福建省新联会艺术家同心社</p>
    </div>

    <div class="col">
      <div class="row" v-for="(item, rowIndex) in 3" :key="rowIndex">
        <div class="person" v-for="(item2, colIndex) in data" :key="colIndex">
          <div class="avatar"></div>
          <div class="introduction">
            <div class="name">{{ item2.name }}</div>
            <div class="profession" v-for="(pro,index) in item2.introduce" :key="index">{{ pro }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import store from "../../store";

let data = ref([]);

onMounted(() => {
  data.value = store.state.person;
  console.log(data.value);
});
</script>

<style scoped>
.navbar {
  height: 150px;
  margin: 0 auto;
  color: #000000;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  max-width: 12rem;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
}

.col {
  display: flex;
  flex-direction: column; /* 修改为纵向排列 */
}

.person {
  display: flex;
  flex-direction: column; /* 修改为纵向排列 */
  align-items: center; /* 居中显示 */
  margin: 0 auto;
  height: 12rem; /* 修改为单元格高度 */
}

.avatar {
  width: 6rem; /* 修改为头像直径 */
  height: 6rem; /* 修改为头像直径 */
  background-image: url(../../assets/avatar.jpg);
  background-size: cover;
  border-radius: 50%; /* 将头像变为圆形 */
  margin-bottom: 8px; /* 调整头像和介绍的间距 */
}
.name{
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 4px;
}

.introduction {
  text-align: center;
  font-size: 0.8rem;
}
</style>
