let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y) => x * y;

const sum = sumOrder(10, 10);

console.log(`Total sum: ${sum}`);
