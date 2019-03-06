let Koa = require('koa')
let KoaRouter = require('koa-router')
let {get} = require('./utils/request')

// 生成实例应用
let app = new Koa()
// 生成路由器
let router = new KoaRouter()

/*
ctx:对象
next：调用的方法
* */
router.get('/', (ctx, next) => {
  ctx.body = '服务器返回的数据'
})

// 搜索图书的接口
router.get('/searchBooks',async (ctx, next) => {
  let req = ctx.query.req
  let url = `https://api.douban.com/v2/book/search?q=${req}`
  let result = await get(url)
  // 返回给前端
  ctx.body = result

})

// 声明使用中间件
app
.use(router.routes())
.use(router.allowedMethods()) // 允许使用路由methods方法 GET、POST

// 监视端口号
app.listen('3000', () => {
  console.log('连接服务器成功')
  console.log('服务器地址：http://localhost:3000')
})
