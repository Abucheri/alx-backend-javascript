const calculateNumber = require('./1-calcul');

console.log(calculateNumber('SUM', 1.4, 4.5));         // Expected output: 6
console.log(calculateNumber('SUBTRACT', 1.4, 4.5));    // Expected output: -4
console.log(calculateNumber('DIVIDE', 1.4, 4.5));      // Expected output: 0.2
console.log(calculateNumber('DIVIDE', 1.4, 0));        // Expected output: 'Error'
console.log(calculateNumber('INVALID', 1, 2));         // Expected output: 'Invalid type'
