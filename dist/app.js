"use strict";
let sumOrder;
sumOrder = (x, y) => {
    return y ? x * y : x;
};
let sum = sumOrder(10, 10);
console.log(`Total sum: ${sum}`); // 100
sum = sumOrder(10);
console.log(`Total sum: ${sum}`); // 10
