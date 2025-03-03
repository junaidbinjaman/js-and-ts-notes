function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(i, "is not a prime number");
      return "Not a prime";
    }
  }
  
  return n, "your number is a prime number"
}

const result = isPrime(149);
console.log(result);
