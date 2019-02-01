"use strict";
let pizzaSize = 'small';
function selectSize(size) {
    pizzaSize = size;
}
selectSize('medium');
console.log(`Pizza size: ${pizzaSize}`);
