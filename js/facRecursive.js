function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const result = factorial(6);
console.log(result);