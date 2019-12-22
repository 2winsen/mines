import { rand, arr, indicesAsTuples } from './utils';

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

describe('indicesAsTuples', () => {
  it('should create correct tuples for small set', () => {
    const cols = 3
    const indices = [0, 1, 2, 3, 4, 5]
    const target = indicesAsTuples(indices, cols);
    expect(target).toEqual([
      [0, 0], [0, 1], [0, 2],
      [1, 0], [1, 1], [1, 2],
    ]);
  })

  it('should create correct tuples for small set', () => {
    const cols = 5
    const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const target = indicesAsTuples(indices, cols);
    expect(target).toEqual([
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
      [2, 0], [2, 1], [2, 2], [2, 3], [2, 4]
    ]);
  })
});