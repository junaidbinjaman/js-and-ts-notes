function malFac(num) {
  let factorial = 1;
  let i = 1;

  while (i <= num) {
    factorial = factorial * i;
    i++;
  }
  return factorial
}

const result = malFac(5);
console.log(result);
