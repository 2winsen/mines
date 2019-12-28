export type CellState = 'OPENED' | 'EXPLODED' | 'HIDDEN' | 'FLAGGED' | 'QUESTIONED';

export class Cell {
  static isAnyOpenedState(cell: Cell): boolean {
    return cell.state === 'OPENED' || cell.state === 'EXPLODED';
  }

  static isAnyHiddenState(cell: Cell): boolean {
    return cell.state === 'HIDDEN' || cell.state === 'FLAGGED' || cell.state === 'QUESTIONED';
  }

  static emptyCell(row: number, col: number): Cell {
    return {
      row,
      col,
      minesAround: 0,
      mine: false,
      state: 'HIDDEN',
    };
  }

  constructor(
    public row: number,
    public col: number,
    public mine: boolean,
    public state: CellState,
    public minesAround: number,
  ) { }
}

export type CellCoords = Pick<Cell, 'col' | 'row'>;