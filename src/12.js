  const getRandomCode = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbols = ["+", "-", "*", "/"];
  
    let code = "";
  
    for (let i = 0; i < 4; i++) {
      code += numbers[Math.floor(Math.random() * numbers.length)] + " ";
    }
  
    code += symbols[Math.floor(Math.random() * symbols.length)];
  
    for (let i = 0; i < 4; i++) {
      code += numbers[Math.floor(Math.random() * numbers.length)] + " ";
    }
  
    return code;
  };
  
  console.log(getRandomCode());