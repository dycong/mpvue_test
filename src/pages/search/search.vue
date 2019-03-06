<template>
  <div>
    <div class="head">
      <input v-model="searchText" type="text" placeholder="书中自有颜如玉" placeholder-class="placeholder">
      <span @click="searchText=''" v-show="searchText"  class="clean">X</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        searchText:''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .head
    width 80%
    border-bottom 1rpx solid #02a774
    margin 0 auto
    height 80rpx
    position relative
    input
      height 100%
      .placeholder
        color #02a774
        text-align center
        font-size 32rpx
    .clean
      position absolute
      z-index 99
      right 10rpx
      top 0
      height 100%
      line-height 80rpx
</style>
