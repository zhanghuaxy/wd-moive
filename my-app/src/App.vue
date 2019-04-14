<template>
  <div id="app">
    <!-- 用来缓存 -->
    <keep-alive>
      <!-- 用来做动画的设置 -->
      <router-view class="container"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#app {
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
.container {
  // 这里必须使用绝对定位，相对定位会出现空白
  position: absolute;
}
</style>
