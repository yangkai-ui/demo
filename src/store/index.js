// store/index.js
import { createStore } from "vuex";
import VuexPersist from "vuex-persist";

const vuexLocalStorage = new VuexPersist({
  key: "my-app",
  storage: window.localStorage,
});

const store = createStore({
  plugins: [vuexLocalStorage.plugin],
  state: {
    // 状态/数据
    person: [
      {
        name: "李式耀",
        introduce: ["省人大代表", "省新阶联副会长", "中音协会员"],
      },
      {
        name: "陈春勇",
        introduce: ["省美协副主席", "省青年画院院长"],
      },
      {
        name: "董希源",
        introduce: ["全国政协委员", "省新阶联副会长", "中美协理事"],
      },
    ],
  },
  mutations: {
    // 更改状态的方法
  },
  actions: {
    // 异步操作或业务逻辑
  },
  getters: {
    // 获取状态的计算属性
  },
  modules: {
    // 可以将 store 拆分成多个模块
  },
});

export default store;
