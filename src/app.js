/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-07 13:28:02
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-16 14:09:57
 * @FilePath: /koa2/koa2-weibo-code/src/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const session = require('koa-generic-session');
const redisStore = require('koa-redis');

const index = require('./routes/index')
const users = require('./routes/users')

const { isProd } = require('./utils/env')

const {REDIS_CONF} = require('./conf/db')
//
const errorViewRouter = require('./routes/view/error');

let onerrorConf = {};

if(isProd) {
  onerrorConf = {
    redirect: '/error'
  }
}


// error handler
onerror(app,onerrorConf);

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

app.keys = ['UISdf_9879##'];

app.use(session({
  store: redisStore({
    all:`${REDIS_CONF.host}:${REDIS_CONF.port}`
  }),
  key: 'weibo.sid',
  prefix: 'weibo:sess:',
  cookie:{
    path:'/',
    httpOnly:true,
    maxAge:24*60*60*1000,
  }
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
//404注册的路由 在最下面
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
