// @flow

// sanity check for default export
import _ from 'lodash';

// sanity check for named exports
import {flatten, map} from 'lodash';

var nums : Array<number> = [1,2,3,4,5,6];

var seq = _(nums);

var squareSeq = seq.map(function(num) {
  return num * num;
});

var nsquares = nums.map(function(val, ind, arr) {
  return val * val;
});

var strSeq = squareSeq.map(function(num) {
  return JSON.stringify(num);
});

var squares = squareSeq.value();
var strings = strSeq.value();
