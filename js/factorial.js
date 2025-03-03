function factorial(num) {
  let sum = 1;

  for (let i = 0; i < num; i++) {
    const factorial = sum * i;
    sum = sum + factorial;
  }
  return sum
}

const result = factorial(5);
console.log(result);
