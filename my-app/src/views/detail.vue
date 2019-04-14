<template>
  <transition name="detail">
    <div>
      <navbar title="详情" @myEvent="goCinema"></navbar>
      <div class="detail">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Swiper from "swiper";
import navbar from "../components/navbar";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    navbar
  },
  updated() {},
  methods: {
    goCinema() {
      this.$router.go(-1);
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style>
.swiper-container {
  width: 100%;
  height: 300px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.detail {
  height: 100%;
  background-color: red;
}
.detail-enter,
.detail-leave-to {
  transform: translateX(100%);
}
.detail-enter-active,
.detail-leave-active {
  transition: all 1s linear;
}
</style>
