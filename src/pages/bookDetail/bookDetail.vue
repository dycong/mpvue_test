<template>
  <div id="wrap">
    <h2>{{booksList.title}}</h2>
    <img :src="booksList.image" alt="">
    <div class="message">
      <p>作者：{{booksList.author}}</p>
      <p>出版社：{{booksList.publisher}}</p>
      <p>出版日期：{{booksList.pubdate}}</p>
      <p>定价：{{booksList.price}}</p>
    </div>
    <button>收藏该书</button>
    <div class="author">
      <p class="info">作者简介</p>
      <p>{{booksList.author_intro}}</p>
    </div>
    <div class="article">
      <p class="info">文章简介</p>
      <p>{{booksList.summary}}</p>
    </div>
  </div>
</template>

<script>
  import booksList from '../books/datas/data'
  console.log(booksList)
  export default {
    data() {
      return{
        booksList:{},
        index:null
      }
    },
    methods:{

    },
    mounted(){
      // console.log(this)
      this.index = this.$mp.query.index
      // console.log(this.index)
      this.booksList = booksList[this.index]
      // console.log(this.booksList)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #wrap
    display flex
    flex-direction column
    align-items center
    width 100%
    h2
      width 100%
      font-size 40rpx
      line-height 80rpx
      font-weight bold
      text-align center
    img
      width 70%
      height 700rpx
    .message
      width 70%
      margin 20rpx 0 10rpx 0
      p
        font-size 32rpx
        text-align left
    button
      width 300rpx
      height 60rpx
      font-size 32rpx
      line-height 60rpx
      margin 20rpx auto
    .author, .article
      width 100%
      padding 10%
      box-sizing border-box
      p
        font-size 34rpx
        line-height 50rpx
        text-indent 80rpx
    .info
      font-weight bold
      color #02a774
      text-align: center

</style>
