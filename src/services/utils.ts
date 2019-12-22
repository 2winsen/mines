export const arr = (length: number) => Array(length).fill(0);

export const rand = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const indicesAsTuples = (indices: number[], cols: number): [number, number][] => {
  return indices.map(i => [Math.floor(i / cols), i % cols]);
}