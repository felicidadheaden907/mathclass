function addNumbers(a, b) {
  return a + b;
}

function calculateSquareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot compute square root of a negative number.");
  }
  const sqrt = Math.sqrt(n);
  return sqrt;
}
