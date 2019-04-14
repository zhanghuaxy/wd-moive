<template>
  <transition :name="cinemas">
    <div>
      <div class="cinema">
        <!-- 静态选择，直接写属性 -->
        <!-- <navbar title="选择影院"></navbar> -->
        <!-- 动态选择 ---data中声明 sinemaName-->
        <navbar :title="sinemaName" @myEvent="goCity"></navbar>
        <div class="cinema_top">
          <div class="cinema_title">北京</div>
          <div
            class="cinemalist"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="10"
          >
            <div
              @click="goDetail"
              class="cinemaitem"
              v-for="(item, index) in cinema"
              :key="index"
            >
              <h4 class="cinemaitem_one">影院：{{ item.cinemaName }}</h4>
              <div>地址：{{ item.address }}</div>
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
import navbar from "../components/navbar";
export default {
  //做动画时使用
  name: "cinema",
  components: {
    navbar
  },
  props: {},
  data() {
    return {
      cityid: 0,
      page: 0,
      cinema: [],
      busy: true,
      totalpage: 0,
      sinemaName: "选择影院",
      cinemas: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    goDetail() {
      this.$router.push({ name: "detail" });
    },
    //用来加载数据
    loadMore() {
      if (this.page >= this.totalpage) {
        this.busy = true;
        return;
      }
      this.getCinema();
    },
    getCinema() {
      //改变this的指向，第一种改成箭头函数，第二种使用 var $this = this;
      var $this = this;
      this.busy = true;
      Vue.show(); //加载前转圈圈
      Http.cinema(this.cityid, this.page, function(data) {
        Vue.hide(); //加载后消失
        console.log(data);
        $this.totalpage = data.data.totalpage;
        //合并数组，每一条10条，每次累加,返回cancat,必须重新赋值一次
        $this.cinema = $this.cinema.concat(data.data.data);
        $this.page++;
        $this.busy = false; //防止加载更多
        // console.log($this.cinema);
      });
    },
    goCity() {
      this.$router.go(-1);
    }
  },
  created() {
    this.cinemas = this.$route.meta.transition;
  },
  mounted() {
    this.cityid = this.$route.query.id;
    this.getCinema();
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log("组件进入");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("组件更新");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (to.name == "citys") {
      this.$route.meta.transition = "cinema";
    } else if (to.name == "detail") {
      this.$route.meta.transition = "cinema1";
    }
    this.cinemas = this.$route.meta.transition;
    // 必须要延迟，否则transition动画无效
    setTimeout(function() {
      next();
    }, 100);
  }
};
</script>
<style lang="less">
.cinema_right {
  position: absolute;
}
.cinema_title {
  padding: 8px 0px 8px 0px;
}
.cinema {
  height: 100%;
}
.cinemaitem {
  padding: 10px 0px 10px 0px;
  background: pink;
  margin-bottom: 10px;
}
.cinemaitem_one {
  padding-bottom: 10px;
}
.cinema_top {
  margin-top: 50px;
  // 主要用来计算高度,保持正常,使用必须减号左右空格
  height: calc(100% - 44px);
  padding: 0px 10px 0px 10px;
}
.cinema-enter {
  transform: translateX(100%);
}
.cinema-leave-to {
  transform: translateX(100%);
}
.cinema-enter-active {
  transition: all 1s linear;
}
.cinema-leave-active {
  transition: all 1s linear;
}
.cinema1-enter {
  transform: translateX(-100%);
}
.cinema1-leave-to {
  transform: translateX(-100%);
}
.cinema1-enter-active {
  transition: all 1s linear;
}
.cinema1-leave-active {
  transition: all 1s linear;
}
</style>
