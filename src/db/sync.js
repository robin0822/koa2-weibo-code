/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-09 14:00:11
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-11 14:17:42
 * @FilePath: /koa2/seqlize-test/src/sync.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const seq = require('../src/seq');

// require('./model')

seq.authenticate().then(()=>{
  console.log('ok');
}).catch(()=>{
    console.log('error');
});

seq.sync({force:true}).then(()=>{
    console.log("sync ok")
 process.exit()
}).catch((error )=>{
    console.log('error===='+error);
});