// @flow

var lodash = require('lodash');

var nums : number[] = [1,2,3,4,5,6];

var seq = lodash(nums);
var chain = lodash.chain(nums);
var unwrapped = seq.value();
var num = unwrapped[0];
var unwrapped = chain.value();
num === unwrapped[0];

var squareSeq = seq.map(function(num) {
  return num * num;
});

var nsquares = nums.map(function(val, ind, arr) {
  return val * val;
});

nsquares = nums.map(function(val, ind) {
  return val * val;
});

nsquares = nums.map(function(val) {
  return val * val;
});

var strSeq = squareSeq.map(function(num) {
  return JSON.stringify(num);
});

var squares = squareSeq.value();
var strings = strSeq.value();
