<template>
  <transition name="city">
    <div>
      <div class="title">当前城市：<span>北京</span></div>
      <div class="big">
        <div v-for="(city, index) in citylist" :key="index">
          <div v-if="city.length > 0">{{ index }}</div>
          <div class="box">
            <div
              class="box1"
              v-for="item in city"
              :key="item.id"
              @click="goCinema(item.id)"
            >
              {{ item.city_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { Http } from "../http/http.js";
import Vue from "vue";
export default {
  //做动画时使用
  name: "citys",
  components: {},
  props: {},
  data() {
    return {
      citylist: {}
    };
  },
  watch: {},
  computed: {},
  methods: {
    goCinema(cityid) {
      this.$router.push({ path: "cinema", query: { id: cityid } });
    }
  },
  created() {},
  mounted() {
    // Vue.pop();自定义的插件
    Vue.show();
    // let citylist = {};
    Http.citys(data => {
      Vue.hide();
      // console.log(data);
      let citys = data.data.citys;
      let tempCitylist = {};
      for (let i = 0; i < 26; i++) {
        //将十进制转换成对象的字母
        let char = String.fromCharCode(65 + i);
        //遍历成A[],B[],C[]....格式
        tempCitylist[char] = [];
      }
      for (let i = 0; i < citys.length; i++) {
        //循环每一项
        let city = citys[i];
        let city_pre = String(city.city_pre).toUpperCase();
        tempCitylist[city_pre].push(city);
      }
      this.citylist = tempCitylist;
    });
  }
};
</script>
<style lang="less">
.big {
  padding: 10px;
}
.box {
  display: flex;
  flex-wrap: wrap;
}
.box1 {
  padding: 10px 0px 10px 0px;
  flex: 1 0 80px;
  // flex-grow: 1;
  // flex-shrink: 0;
  // flex-basis: 80px;
}
.city-enter {
  transform: translateX(-100%);
}
.city-leave-to {
  transform: translateX(-100%);
}
.city-enter-active {
  transition: all 1s linear;
}
.city-leave-active {
  transition: all 1s linear;
}
</style>
