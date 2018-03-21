
var baseurl = 'http://127.0.0.1:3000';
var token = '';
module.exports = {
    // 如果一个方法的返回结果是promise,那么他执行的最后结果必须是一个promise
    get: (url) => {
        // localStorage h5 中的一个新特性
        // 发起网络请求之前取到token
        token = localStorage.getItem('token');
        // fetch(url, "http请求配置信息")
        let promise = fetch(baseurl + url, {
            method: 'GET',
            headers: {
              token:token
            },
          })
          .then(response => {
              // response 是http 响应结果,最终的值存在里面
              // response.json() 获取我们自己send的内容
              // json() 返回的是一个promise
            return response.json()
          })
          .then(data => {
              // 这个data才是我们返回的值
              if(data.errcode === 1000){
                localStorage.setItem('token',null);
                return Promise.resolve(data)
              }else{
                return Promise.resolve(data)
              }
          })
          return promise;
    },
    post: (url, data) => {
        token = localStorage.getItem('token');
        return fetch(baseurl + url, {
            method: 'POST',
            headers: {
                token:token,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify(data),
        }).then(resonse => resonse.json())
        .then(data => {
            if(data.errcode === 1000){
              localStorage.setItem('token',null);
              return Promise.resolve(data)
            }else{
                return Promise.resolve(data)
            }
        })
    }
}