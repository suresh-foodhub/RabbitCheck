// Calculator class
class Calculator {
    // Add method
    add(a, b) {
      return a + b;
    }
  
    // Subtract method
    subtract(a, b) {
      return a - b;
    }
  
    // Multiply method
    multiply(a, b) {
      return a * b;
    }
  
    // Divide method
    divide(a, b) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    }
  }
  
  // Export Calculator class
  module.exports = Calculator;
  