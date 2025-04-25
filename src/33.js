// Define a function to perform mathematical operations
function performMathematicalOperations(a, b, operation) {
  switch(operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error('Division by zero is not allowed.');
      }
    default:
      throw new Error('Unsupported operation');
  }
}

// Example usage
console.log(performMathematicalOperations(5, 3, 'add')); // Output: 8
console.log(performMathematicalOperations(10, 2, 'subtract')); // Output: 8
console.log(performMathematicalOperations(4, 1.5, 'multiply')); // Output: 6.0
