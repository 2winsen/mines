export interface Cell {
  mine?: boolean;
  minesAround: number;
  visible?: boolean;
}