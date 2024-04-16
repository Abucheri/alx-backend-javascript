// 5-typed_arrays.test.js

import createInt8TypedArray from './5-typed_arrays';

describe('createInt8TypedArray', () => {
  it('should return a DataView with the specified Int8 value at the given position', () => {
    const length = 10;
    const position = 2;
    const value = 89;

    const result = createInt8TypedArray(length, position, value);

    const expectedBuffer = new ArrayBuffer(length);
    const expectedView = new DataView(expectedBuffer);
    expectedView.setInt8(position, value);

    expect(result instanceof DataView).toBe(true);
    expect(result.byteLength).toBe(expectedView.byteLength);
    expect(result.byteOffset).toBe(expectedView.byteOffset);
    expect(Array.from(new Uint8Array(result.buffer))).toEqual(Array.from(new Uint8Array(expectedView.buffer)));
  });

  it('should throw an error if the position is outside the range', () => {
    const length = 10;
    const position = 11;
    const value = 89;

    expect(() => createInt8TypedArray(length, position, value)).toThrowError('Position outside range');
  });
});
