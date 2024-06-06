const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let stub;

  beforeEach(function() {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function() {
    stub.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function() {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
    spy.restore();
  });
});
