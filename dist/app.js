"use strict";
let pizzaSize = 'small';
const selectSize = x => {
    pizzaSize = x;
};
selectSize('small');
console.log(pizzaSize);
