'use strict';

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const case1 = turtleMoves.filter((val) => val[0] >= 0 && val[1] >= 0);
const case2 = turtleMoves.map((val) => Math.abs(val[0]) + Math.abs(val[1]));

let count = 0;
case1.forEach((item) => count += item[0] + item[1]);
console.log(count);

count = 0;
case2.forEach((item) => count += item);
console.log(count);