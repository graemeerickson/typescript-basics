let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping('canadian bacon');

console.log(selectedTopping);
