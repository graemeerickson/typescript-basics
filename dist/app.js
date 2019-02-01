"use strict";
const pizza = { name: 'Blazing Inferno', toppings: 5 };
const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj) {
    return JSON.parse(obj).toppings;
}
console.log(getNameFromJSON(serialized));
