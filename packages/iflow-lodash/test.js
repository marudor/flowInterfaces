// @flow

var lodash = require('lodash');
var map = require('lodash').map;
var concat = require('lodash').concat;

var nums : number[] = [1,2,3,4,5,6];
var num : number;
var string : string;
var bool : bool;

var implicit = lodash(nums);
var explicit = lodash.chain(nums);

var nativeSquares : number[];
var directSquares : number[];
var implicitSquares : number[];
var explicitSquares : number[];

var nativeStrings : string[];
var directStrings : string[];
var implicitStrings : string[];
var explicitStrings : string[];

var allNums : number[];
var numsAndStrList : Array<number|string>;
var mixedList : Array<mixed>;
allNums = concat(nums, nums, nums);
numsAndStrList = concat(nums, '123', '456');
numsAndStrList = concat(nums, ['123', '456']);
numsAndStrList = concat(nums, [[1,2,3], '456']);
mixedList = concat(nums, [[1,2,3], '456']);

// Array#map, lodash.map, lodash#map
nativeSquares = nums.map(function(num) {
  return num * num;
});
directSquares = map(nums, function(num) {
  return num * num;
});
implicitSquares = implicit.map(function(num) {
  return num * num;
}).value();
explicitSquares = explicit.map(function(num) {
  return num * num;
}).value();

num = lodash.first(nums);
num = implicit.value()[0];
num = explicit.value()[0];

// Implicit chain vs explicit chain
num = implicit.sum();
num = explicit.sum().value();
num = implicit.chain().sum().value();
num = explicit.chain().sum().value();

// return type of iterator is reflected in result and chain
nativeStrings = nums.map(function(num) {
  return JSON.stringify(num);
});
directStrings = map(nums, function(num) {
  return JSON.stringify(num);
});
implicitStrings = implicit.map(function(num) {
  return JSON.stringify(num);
}).value();
explicitStrings = explicit.map(function(num) {
  return JSON.stringify(num);
}).value();

var obj = {a:1, b:2};
bool = lodash.conformsTo(obj, {
  a: function(x:number) {
    return true;
  },
});

num = lodash.defaultTo(undefined, 2);
string = lodash.defaultTo(undefined, 'str');
bool = lodash.defaultTo(true, 'str');
string = lodash.defaultTo('str', true);

num = lodash.tap(1, function(n) { return false; });
bool = lodash.thru(1, function(n) { return false; });
