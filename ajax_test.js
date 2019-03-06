// 创建一个实例
let xmlHTTP =new XMLHttpRequest()

// 绑定事件监听
xmlHTTP.onreadystatechange = function () {
  // 成功的回调 必要的条件
  if(xmlHTTP.readyState === 4 && xmlHTTP.status === 200){
    console.log(xmlHTTP.response)
  }
}
// 用来创建链接，并且规定请求的方式
xmlHTTP.open(url, method)

// 发送
xmlHTTP.send()
