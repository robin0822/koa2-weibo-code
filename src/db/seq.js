/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-11 13:38:06
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-11 14:18:08
 * @FilePath: /koa2/koa2-weibo-code/src/db/seq.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const Sequelize = require('sequelize');
const {MYSQL_CONF} = require('../conf/db');
const { isProd,isTest } = require('../utils/env')

const {host,user,password,database} = MYSQL_CONF;

const conf = {
    host: 'localhost',
    dialect:'mysql'
}

if(isTest) {
    conf.logging = ()=>{}
}

if(isProd) {
    conf.pool = {
        max:5,
        min:0,
        idle:1000
    }
}

const seq = new Sequelize(database,user,password,conf);

module.exports = seq;