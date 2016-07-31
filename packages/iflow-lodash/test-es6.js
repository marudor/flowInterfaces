// @flow

// sanity check for default export
import lodash from 'lodash';

// sanity check for named exports
import {concat, map} from 'lodash';

var nums : number[] = [1,2,3,4,5,6];

var num : number;

var nativeSquares : number[];
var directSquares : number[];

var nativeStrings : string[];
var directStrings : string[];

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

num = lodash.first(nums);

// return type of iterator is reflected in result and chain
nativeStrings = nums.map(function(num) {
  return JSON.stringify(num);
});
directStrings = map(nums, function(num) {
  return JSON.stringify(num);
});
