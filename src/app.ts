let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => x * y;

let sum: number = sumOrder(10, 10);
console.log(`Total sum: ${sum}`); // 100

sum = sumOrder(10);
console.log(`Total sum: ${sum}`); // 10
