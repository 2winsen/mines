import React from 'react';
import Board from './components/Board';
import { Size } from './types/Size';
import { Cell } from './types/Cell';
import styled from 'styled-components';
import { rand, arr, indicesAsTuples } from './services/utils';

const generateMines = (size: Size): [number, number][] => {
  const mines = new Set<number>();
  while (mines.size < size.mines) {
    mines.add(rand(0, (size.rows * size.columns) - 1));
  }
  return indicesAsTuples(Array.from(mines), size.columns);
};

const generateEmptyBoardWithMines = (size: Size): Cell[][] => {
  const mines = generateMines(size);
  return arr(size.rows).map((_, ri) =>
    arr(size.columns).map((_, ci) => {
      const cell: Cell = {
        row: ri,
        col: ci,
        minesAround: 0,
        mine: Boolean(mines.find(([r, c]) => r === ri && c === ci)),
        visible: true,
      };
      return cell;
    }));
}

const calculateMinesAround = (board: Cell[][], cell: Cell) => {
  if (cell.mine) {
    return 0;
  }
  let minesAround = 0;

  const top = board[cell.row - 1] && board[cell.row - 1][cell.col];
  const topRight = board[cell.row - 1] && board[cell.row - 1][cell.col + 1];
  const right = board[cell.row] && board[cell.row][cell.col + 1];
  const bottomRight = board[cell.row + 1] && board[cell.row + 1][cell.col + 1];
  const bottom = board[cell.row + 1] && board[cell.row + 1][cell.col];
  const bottomLeft = board[cell.row + 1] && board[cell.row + 1][cell.col - 1];
  const left = board[cell.row] && board[cell.row][cell.col - 1];
  const topLeft = board[cell.row - 1] && board[cell.row - 1][cell.col - 1];

  if (top && top.mine) minesAround++;
  if (topRight && topRight.mine) minesAround++;
  if (right && right.mine) minesAround++;
  if (bottomRight && bottomRight.mine) minesAround++;
  if (bottom && bottom.mine) minesAround++;
  if (bottomLeft && bottomLeft.mine) minesAround++;
  if (left && left.mine) minesAround++;
  if (topLeft && topLeft.mine) minesAround++;
  return minesAround;
}

const generateBoard = (size: Size) => {
  const emptyBoardWithMines = generateEmptyBoardWithMines(size);
  return emptyBoardWithMines.map(row =>
    row.map(cell => ({
      ...cell,
      minesAround: calculateMinesAround(emptyBoardWithMines, cell)
    }))
  );
}

const getSizes = (): { [key: string]: Size } => ({
  small: { rows: 9, columns: 9, mines: 10 },
});

const App: React.FC = () => {
  const size = getSizes().small;
  return (
    <AppStyled>
      <Board board={generateBoard(size)} size={size} />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default App;
