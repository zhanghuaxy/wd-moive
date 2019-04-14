<template>
  <div class="navbar">
    <div class="navbar_back" @click="navBack">
      <span class="fa fa-angle-left"></span>
    </div>
    <div class="navbar_title">
      {{ title }}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: ["title"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    navBack() {
      //   this.$router.go(-1);
      this.$emit("myEvent"); //发送的是页面行为，通过子传父之间的传值
    }
  },
  created() {
    this.cinemas = this.$route.params.id;
  },
  mounted() {}
};
</script>
<style>
.navbar {
  height: 44px;
  background: greenyellow;
  position: fixed;
  left: 0;
  top: 0px;
  width: 100%;
  line-height: 44px;
  z-index: 9;
}
.navbar_title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}
.navbar_back {
  position: absolute;
  left: 10px;
  font-size: 1.5em;
}
.fa-angle-left {
  color: white;
  font-size: 30px;
}
</style>
