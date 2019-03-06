<template>
  <div class="booksSwiper">
    <swiper indicator-dots indicator-color="green" indicator-active-color="deeppink">
      <swiper-item v-for="(item, index) in handleSwiper" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="books">
      <div class="books_head">
        <span>全部商品</span>
        <span class="more" @click="toBookList"> > </span>
      </div>
      <ul class="books_list">
        <li v-for="(book, index) in booksList" :key="index" @click="toBookDetail(index)">
          <img :src="book.image" alt="">
          <p>《{{book.title}}》</p>
          <p>{{book.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import booksList from './datas/data'
  // console.log(booksList, typeof booksList)
  export default {
    data () {
      return {
        booksList
      }
    },
    mounted(){
      setTimeout(() => {
        this.booksList = booksList
      }, 1000)
    },
    methods:{
      toBookList(){
        wx.navigateTo({
          url:'/pages/bookList/main?booksList=' + JSON.stringify(this.booksList)
        })
      },
      toBookDetail(index) {
        // console.log(index)
        wx.navigateTo({
          url:'/pages/bookDetail/main?index=' + index
        })
      }
    },
    computed:{
      handleSwiper() {
        return [...this.booksList].slice(0,3)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .booksSwiper
    width 100%;
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 400rpx
    .books
      .books_head
        padding 10rpx
        .more
          float right
          width 80rpx
          text-align right
          color #02a774
      .books_list
        display flex
        flex-wrap wrap
        li
          width 50%
          display flex
          flex-direction column
          align-items center
          padding 10rpx
          box-sizing border-box
          border-bottom 1rpx solid #eee
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
          p
            font-size 28rpx
            line-height 60rpx
</style>
