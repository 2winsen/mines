import React from 'react';
import Board from './components/Board';
import { Size } from './types/Size';
import { Cell } from './types/Cell';
import styled from 'styled-components';

const arr = (length: number) => Array(length).fill(0);

const generateCells = ({ rows, columns }: Size): Cell[][] => {
  return arr(rows).map(r =>
    arr(columns).map(c => {
      const cell: Cell = {
        minesAround: 0,
        mine: false,
        visible: false,
      };
      return cell;
    }));
}

const getSizes = (): { [key: string]: Size } => ({
  small: { rows: 9, columns: 9, mines: 10 },
});

const App: React.FC = () => {
  const size = getSizes().small;
  return (
    <AppStyled>
      <Board board={generateCells(size)} size={size} />
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
