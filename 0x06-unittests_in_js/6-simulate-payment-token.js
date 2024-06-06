// Import the function to simulate
const getPaymentTokenFromAPI = require('./6-payment_token');

// Simulate the function call with success = true
getPaymentTokenFromAPI(true)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Simulate the function call with success = false
getPaymentTokenFromAPI(false)
  .then(response => {
    if (response) {
      console.log(response.data);
    } else {
      console.log('No response from the API');
    }
  })
  .catch(error => {
    console.error(error);
  });
