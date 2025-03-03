function leapYear(year) {
  const checkYear = year % 4;
  
  if(checkYear === 0) {
    return "your year is a leap year"
  }else {
    return "your is not a leap year"
  };
};

// const result = leapYear(2021);

const check2000 = leapYear(1700);
console.log(check2000);

// console.log(result);

