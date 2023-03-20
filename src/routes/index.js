const { error } = require('console');

/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-07 13:28:02
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-16 14:24:48
 * @FilePath: /koa2-weibo-code/src/routes/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log('before debugger');
  debugger
  console.log('after debugger');
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe:true, 
    blogList:[
      {
        id:1,
        title:"aaa"
      },
      {
        id:2,
        title:"bbb"
      },
      {
        id:3,
        title:"bbb"
      }
    ]
  
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  const session = ctx.session;
  if(session.viewNum == null) {
    session.viewNum = 0;
  }
  session.viewNum++;

  ctx.body = {
    title: 'koa2 json',
    viewNum:session.viewNum
  }
})

module.exports = router
