<template>
  <div>
    <div id="bookListContainer" v-for="(book, index) in booksList" :key="index">
      <img class="bookImg" :src="book.image" alt="">
      <div class="bookInfo">
        <p>{{book.title}}</p>
        <p>作者:{{book.author}}</p>
        <p>出版社:{{book.publisher}}</p>
      </div>
      <p class="bookPrice">{{book.price}}</p>
    </div>
  </div>
</template>
<script>
  /*
  books 向 booksList里传递数据  ?key = value
  bookList 接收数据
    mounted(){
      this.booksList = this.$em.query.key
    }
  * */

  export default {
    data(){
      return {
        booksList:[]
      }
    },
    methods:{},
    mounted() {
      // 接收路由传递过来的数据
      this.booksList = JSON.parse(this.$mp.query.booksList)
    },
    // 小程序中获取数据的生命周期函数
    // onLoad(options) {
    //   console.log(options)
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #bookListContainer
    display flex
    padding 10rpx
    border-bottom 1rpx solid #eee
    img
      width 140rpx
      height 140rpx
      margin-right 20rpx
    .bookInfo
      p
        font-size 28rpx
        line-height 50rpx
    .bookPrice
      position absolute
      right 30rpx
      font-size 36rpx
      font-weight bold
      color red
</style>
