export const arr = (length: number) => Array(length).fill(0);

/**
 * @param min inclusive
 * @param max inclusive
 */
export const rand = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}