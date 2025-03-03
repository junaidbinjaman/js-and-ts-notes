function inchToFeet(inch) {
  const feet = 12;
  const inchToFeet = inch / feet;
  return inchToFeet;
}

const result = inchToFeet(60);
console.log(result);

for (let i = 0; i < 100000; i++) {
  console.log(i);
}
