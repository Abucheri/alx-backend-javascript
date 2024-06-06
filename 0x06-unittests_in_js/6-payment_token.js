function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Do nothing, as instructed
      // You can also use resolve() without any argument
      resolve();
    }
  });
}

module.exports = getPaymentTokenFromAPI;
