import loadBalancer from './7-load_balancer';

describe('loadBalancer', () => {
  it('should return the value of the promise that resolves first', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';

    const promiseUK = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, ukSuccess);
    });

    const promiseFR = new Promise((resolve, reject) => {
      setTimeout(resolve, 200, frSuccess);
    });

    expect(await loadBalancer(promiseUK, promiseFR)).toBe(ukSuccess);
  });

  it('should handle promises with different resolving times correctly', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';

    const promiseUKSlow = new Promise((resolve, reject) => {
      setTimeout(resolve, 400, ukSuccess);
    });

    const promiseFR = new Promise((resolve, reject) => {
      setTimeout(resolve, 200, frSuccess);
    });

    expect(await loadBalancer(promiseUKSlow, promiseFR)).toBe(frSuccess);
  });
});
