<template>
  <div class="firstSwiper">
    <swiper @change="handleChange" :indicator-dots="index < 3" indicator-color="green" indicator-active-color="deeppink">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="handleStart" v-if="index === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        index:0
      }
    },

    methods:{
      handleChange(event) {
        console.log(event.mp.detail.current)
        this.index = event.mp.detail.current
      },
      handleStart() {
        wx.navigateTo({
          url:'/pages/books/main'
        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .firstSwiper
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      swiper-item
        width 100%
        height 100%
        img
          width 100%
          height 100%
    button
      position absolute
      bottom 40rpx
      left 50%
      margin-left -140rpx
      width 280rpx
      height 60rpx
      border-radius 10rpx
      line-height 60rpx
      text-align center
      background rgba(255,255,255, .7)
</style>
