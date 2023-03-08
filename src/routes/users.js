/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-07 13:28:02
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-08 13:49:13
 * @FilePath: /koa2-weibo-code/src/routes/users.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async function(ctx,next) {

  const {userName,passWord} = ctx.request.body;
  ctx.body = {
    userName,
    passWord
  };
  
})


module.exports = router
