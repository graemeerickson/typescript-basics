let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
  return y ? x * y : x;
};

let sum: number = sumOrder(10, 10);
console.log(`Total sum: ${sum}`); // 100

sum = sumOrder(10);
console.log(`Total sum: ${sum}`); // 10
