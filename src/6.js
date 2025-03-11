// Example function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Example function to generate a random number within a specific range
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
