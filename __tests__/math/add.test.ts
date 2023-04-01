import add from '@src/math/add';

describe('add function', () => {
  it('Should add 2 numbers', () => {
    expect(add(8, 9)).toBe(17);
  });
});
