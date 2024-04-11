import guardrail from './9-try';
import divideFunction from './8-try';

describe('guardrail function', () => {
  it('should return an array containing the result of the mathFunction and "Guardrail was processed"', () => {
    const mathFunction = () => divideFunction(10, 2);
    const result = guardrail(mathFunction);
    expect(result).toEqual([5, 'Guardrail was processed']);
  });

  it('should return an array containing the error message and "Guardrail was processed" when mathFunction throws an error', () => {
    const mathFunction = () => divideFunction(10, 0);
    const result = guardrail(mathFunction);
    expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
  });
});
