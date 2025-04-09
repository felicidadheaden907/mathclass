function findDivisor(num) {
  let divisor = 1;
  while (divisor <= num / 2) {
    if (num % divisor === 0) {
      return divisor;
    }
    divisor++;
  }
}

console.log(findDivisor(15)); // Output: 3
