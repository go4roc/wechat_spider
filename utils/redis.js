'use strict';

const redis = require('redis');
const { promisify } = require('util');
const config = require('../config');

const { port = 6389, host = '127.0.0.1', pass = '4f93d80374f20' } = config.redis;

const redisClient = redis.createClient(port, host);
redisClient.auth(pass);

module.exports = asyncRedis;

function asyncRedis(cmd, ...args) {
  return promisify(redisClient[cmd]).call(redisClient, ...args);
}
