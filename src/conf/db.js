/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-11 13:52:09
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-11 13:59:21
 * @FilePath: /koa2/koa2-weibo-code/src/conf/db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description 存储配置
 * @author 双越老师
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'koa2_weibo_db'
}

if (isProd) {
    REDIS_CONF = {
        // 线上的 redis 配置
        port: 6379,
        host: '127.0.0.1'
    }

    MYSQL_CONF = {
        // 线上的 mysql 配置
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'koa2_weibo_db'
    }
    
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}
