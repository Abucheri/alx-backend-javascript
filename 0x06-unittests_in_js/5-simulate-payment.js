const sendPaymentRequestToApi = require('./5-payment');

// Mock console.log
const originalConsoleLog = console.log;
console.log = function(message) {
  console.log = originalConsoleLog; // Restore original console.log immediately
  console.log(message); // Output the message
};

// Call the function with sample arguments
sendPaymentRequestToApi(100, 20);
