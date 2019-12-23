import { Cell } from '../types/Cell';
import { Size } from '../types/Size';
import { rand, indicesAsTuples, tupleAsIndex, arr } from './utils';

const generateMines = (size: Size, exceptionCells: Cell[]): [number, number][] => {
  const mines = new Set<number>();
  const exceptionCellIndices = exceptionCells.map(c => tupleAsIndex([c.row, c.col], size.columns));
  while (mines.size < size.mines) {
    const mineIndex = rand(0, (size.rows * size.columns) - 1);
    if (exceptionCellIndices.find(i => i === mineIndex)) {
      continue;
    }
    mines.add(mineIndex);
  }
  return indicesAsTuples(Array.from(mines), size.columns);
};

const getCellsAround = (cell: Cell, board: Cell[][]) => {
  const top = board[cell.row - 1] && board[cell.row - 1][cell.col];
  const topRight = board[cell.row - 1] && board[cell.row - 1][cell.col + 1];
  const right = board[cell.row] && board[cell.row][cell.col + 1];
  const bottomRight = board[cell.row + 1] && board[cell.row + 1][cell.col + 1];
  const bottom = board[cell.row + 1] && board[cell.row + 1][cell.col];
  const bottomLeft = board[cell.row + 1] && board[cell.row + 1][cell.col - 1];
  const left = board[cell.row] && board[cell.row][cell.col - 1];
  const topLeft = board[cell.row - 1] && board[cell.row - 1][cell.col - 1];
  return [top, topRight, right, bottomRight, bottom, bottomLeft, left, topLeft]
    .filter(x => !!x)
}

const equalCells = (cell1: Cell, cell2: Cell) => cell1.row === cell2.row && cell1.col === cell2.col;

const calculateMinesAround = (cell: Cell, board: Cell[][]) => {
  if (cell.mine) {
    return cell.minesAround;
  }
  return getCellsAround(cell, board).reduce((acc, curr) => {
    if (curr.mine) {
      return acc + 1
    };
    return acc;
  }, 0)
}

const mapCell = (board: Cell[][], map: (c: Cell) => Cell): Cell[][] => {
  return board.map(row => row.map(map));
}

const getEmptyCells = (board: Cell[][], cell: Cell): Cell[] => {
  const emptyCells = [cell];
  let nextIndex = 0;
  while (true) {
    let newItemsCount = 0;
    for (let index = nextIndex; index < emptyCells.length; index++) {
      const empty = emptyCells[index];
      const cells = getCellsAround(empty, board);
      for (let j = 0; j < cells.length; j++) {
        const c = cells[j];
        if (c.minesAround === 0 && emptyCells.every(x => !equalCells(x, c))) {
          emptyCells.push(c);
          newItemsCount++;
        }
      }
      nextIndex++;
    }
    const noNewItems = newItemsCount === 0;
    if (noNewItems) {
      break;
    }
  }
  return emptyCells;
}

const getCellsAroundEmptyCells = (board: Cell[][], emptyCells: Cell[]) => {
  return emptyCells.reduce((acc, curr) => {
    return [...acc, ...getCellsAround(curr, board)]
  }, [] as Cell[]);
}

const showMultipleCells = (board: Cell[][], cell: Cell) => {
  const emptyCells = getEmptyCells(board, cell);
  const aroundEmptyCells = getCellsAroundEmptyCells(board, emptyCells);
  const cellsToShow = [...emptyCells, ...aroundEmptyCells];
  return mapCell(board, c => {
    if (cellsToShow.find(cellToShow => equalCells(c, cellToShow))) {
      return { ...c, visible: true };
    }
    return c;
  });
}

const showSingleCell = (board: Cell[][], cell: Cell) => {
  return mapCell(board, c => {
    if (equalCells(c, cell)) {
      return { ...c, visible: true };
    }
    return c;
  });
}

const showMines = (board: Cell[][], cell: Cell) => {
  return mapCell(board, c => {
    if (c.mine) {
      return { ...c, visible: true };
    }
    return c;
  });
}

export const showCell = (board: Cell[][], cell: Cell) => {
  if (cell.mine) {
    return showMines(board, cell)
  }
  if (cell.minesAround === 0) {
    return showMultipleCells(board, cell)
  }
  return showSingleCell(board, cell)
}

export const addMines = (size: Size, board: Cell[][], cell: Cell) => {
  const exceptionCells = [cell, ...getCellsAround(cell, board)]
  const mines = generateMines(size, exceptionCells);
  const boardWithMines = mapCell(board, c => {
    return {
      ...c,
      mine: Boolean(mines.find(([mineRow, mineCol]) => mineRow === c.row && mineCol === c.col)),
      minesAround: -1
    }
  });
  return mapCell(boardWithMines, c => ({
    ...c,
    minesAround: calculateMinesAround(c, boardWithMines)
  }));
}

export const isNewBoard = (board: Cell[][]) => board.every(row => row.every(c => !c.visible));
export const isLost = (board: Cell[][]) => board.some(row => row.some(c => c.visible && c.mine));

export const generateEmptyBoard = (size: Size): Cell[][] => {
  return arr(size.rows).map((_, ri) =>
    arr(size.columns).map((_, ci) => {
      const cell: Cell = {
        row: ri,
        col: ci,
        minesAround: 0,
        mine: false,
        visible: false,
      };
      return cell;
    }));
}