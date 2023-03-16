/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-03-16 13:29:31
 * @LastEditors: robin0822 125346665@qq.com
 * @LastEditTime: 2023-03-16 13:44:30
 * @FilePath: /koa2/koa2-weibo-code/src/cache/_redis.js
 * @Description: redis 配置
 */
const redis = require('redis');

const {REDIS_CONF} = require('../conf/db')


const redisClient = redis.createClient(6379,'127.0.0.1')


redisClient.on('error',err=>{
console.log(err);
});


function getRedisIsOpen() {
  return redisClient.isOpen;
}

function getRedisReady(){
  return redisClient.isReady;
}


async function  redisConnect (){
 return redisClient.connect();
}



function setKeyAndValue(key,value,timeout = 60*60){

console.log('key====',key);

  if(typeof value === 'object') {
    value = JSON.stringify(value);
    console.log('value===',value);
  }

  console.log('value',value);
  redisClient.expire(timeout);
  redisClient.set(key,value);
}


async function getValueWithKey(key){

 return await redisClient.get(key);
}


module.exports = {
  getRedisIsOpen,
  getRedisReady,
  redisConnect,
  setKeyAndValue,
  getValueWithKey
}
