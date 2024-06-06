const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Add your Chai assertion here to verify the response
        // For example:
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error); // If an error occurs, pass it to done
      });
  });
});
