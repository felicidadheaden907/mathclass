  function getRandomCode() {
    const codes = [
      "console.log('Hello World');",
      "let x = 5;",
      "const y = 'John Doe';",
      "function add(a, b) { return a + b; }",
      "const obj = { name: 'Jane', age: 30 };",
    ];
  
    return codes[Math.floor(Math.random() * codes.length)];
  }

