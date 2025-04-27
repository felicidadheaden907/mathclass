function calculateArea(rectangle1, rectangle2) {
  const width = Math.max(rectangle1.width, rectangle2.width);
  const height = Math.max(rectangle1.height, rectangle2.height);
  
  if (width === height) {
    return `The areas of the rectangles are equal: ${width} × ${height}.`;
  } else {
    return `Sorry, I don't know how to calculate. Please provide more information.`;
  }
}

function findFibonacciNumbers(limit) {
  const numbers = [];
  
  for (let i = 0; i < limit; i++) {
    if (i <= 1) {
      numbers.push(i);
    } else {
      let nextNumber = numbers[i - 2] + numbers[i - 1];
      numbers.push(nextNumber);
    }
  }
  
  return numbers;
}

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n-1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
      }
    }
    
    if (!swapped) return arr;
  }
}

function encryptMessage(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const encryptedMessage = '';
  
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    
    // Encrypt uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      charCode -= 32;
    }
    
    encryptedMessage += alphabet.charAt(charCode);
  }
  
  return encryptedMessage;
}

function decryptMessage(encryptedMessage) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const decryptedMessage = '';
  
  for (let i = 0; i < encryptedMessage.length; i++) {
    let charCode = encryptedMessage.charCodeAt(i);
    
    // Decrypt uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }
    
    decryptedMessage += alphabet.charAt(charCode);
  }
  
  return decryptedMessage;
}
