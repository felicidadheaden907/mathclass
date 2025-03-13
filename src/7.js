function getRandomCode() {
  const codes = [
    "const add = (a, b) => a + b;",
    "const subtract = (a, b) => a - b;",
    "const multiply = (a, b) => a * b;",
    "const divide = (a, b) => a / b;"
  ];
  return codes[Math.floor(Math.random() * codes.length)];
}
