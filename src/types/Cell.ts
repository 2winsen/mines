export interface Cell {
  row: number;
  col: number;
  mine?: boolean;
  minesAround: number;
  visible?: boolean;
}