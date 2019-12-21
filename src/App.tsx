import React from 'react';
import Board from './components/Board';
import { Size } from './types/Size';
import { Cell } from './types/Cell';
import styled from 'styled-components';

const generateCells = (size: Size): Cell[][] => {
  return [
    [{ minesAround: 1 }, { minesAround: 11 }, { minesAround: 111 }],
    [{ minesAround: 2 }, { minesAround: 22 }, { minesAround: 222 }],
    // [{ minesCount: 1 }, { minesCount: 1 }, { minesCount: 1 }],
  ]
}

const getSizes = (): { [key: string]: Size } => ({
  small: { width: 3, height: 3, mines: 0 },
  medium: { width: 10, height: 10, mines: 0 },
});

const App: React.FC = () => {
  return (
    <AppStyled>
      <Board board={generateCells(getSizes().small)} />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100%;
`;

export default App;
