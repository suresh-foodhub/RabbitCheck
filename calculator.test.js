// Importing the Calculator class
const Calculator = require("./calculator");

// Function to run tests
function runTests() {
  const calculator = new Calculator();

  // Test cases for addition
  console.log("Testing addition:");
  console.log("2 + 3 =", calculator.add(2, 3)); // Expected output: 5
  console.log("10 + (-5) =", calculator.add(10, -5)); // Expected output: 5
  console.log("");

  // Test cases for multiplication
  console.log("Testing multiplication:");
  console.log("2 * 3 =", calculator.multiply(2, 3)); // Expected output: 6
  console.log("10 * (-5) =", calculator.multiply(10, -5)); // Expected output: -50
  console.log("");

  // Test cases for division
  console.log("Testing division:");
  console.log("6 / 2 =", calculator.divide(6, 2)); // Expected output: 3
  console.log("10 / (-5) =", calculator.divide(10, -5)); // Expected output: -2
  try {
    console.log("10 / 0 =", calculator.divide(10, 0)); // Expected output: Error
  } catch (error) {
    console.log("Error:", error.message); // Expected output: Error message
  }
}

// Run tests
runTests();
