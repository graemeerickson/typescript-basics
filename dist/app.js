"use strict";
let pizza = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return pizza.name;
    },
};
console.log(pizza.getName());
