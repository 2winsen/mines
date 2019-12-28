import { rand, arr } from './utils';

describe('arr', () => {
  it('should create array of size', () => {
    expect(arr(10)).toHaveLength(10);
    expect(arr(1)).toHaveLength(1);
  })
});

describe('rand', () => {
  it('should return value within small limits', () => {
    const min = 0;
    const max = 0;
    for (let i = 0; i < 100; i++) {
      expect(rand(min, max)).toBeGreaterThanOrEqual(min);
      expect(rand(min, max)).toBeLessThanOrEqual(max);
    }
  })

  it('should return value within limits', () => {
    const min = 10;
    const max = 20;
    for (let i = 0; i < 100; i++) {
      expect(rand(min, max)).toBeGreaterThanOrEqual(min);
      expect(rand(min, max)).toBeLessThanOrEqual(max);
    }
  })
});
