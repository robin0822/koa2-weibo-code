/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-14 13:35:27
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-14 13:37:21
 * @FilePath: /koa2/koa2-weibo-code/src/routes/view/error.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const router = require('koa-router')();

router.get('/error',async(ctx,next)=>{
    await ctx.render('error');
});

router.get('*',async(ctx,next)=>{
    await ctx.render('404');
});

module.exports = router;