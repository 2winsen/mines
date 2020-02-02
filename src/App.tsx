import React, { useState, useEffect, useCallback } from 'react';
import Board from './components/Board';
import { Size } from './types/Size';
import { Cell } from './types/Cell';
import styled from 'styled-components';
import { generateEmptyBoard, addMines, showCells, cellNextHiddenState, showCellsAround, updateGame } from './services/boardUtils';
import { Game } from './types/Game';
import Controls from './components/Controls/Controls';
import Sidebar from './components/Sidebar';

const SIZES = {
  beginner: { rows: 9, columns: 9, mines: 10 },
  intermediate: { rows: 16, columns: 16, mines: 40 },
  expert: { rows: 16, columns: 30, mines: 99 },
  test: { rows: 3, columns: 3, mines: 2 },
};

const App: React.FC = () => {
  const [size, setSize] = useState<Size>(SIZES.beginner);
  const [board, setBoard] = useState<Cell[][]>(() => generateEmptyBoard(size));
  const [game, setGame] = useState<Game>(() => Game.newGame(size.mines));

  useEffect(() => {
    setGame(updateGame(size, board));
  }, [board, size]);

  const handleCellClick = useCallback((cell: Cell) => {
    if (Cell.isAnyOpenedState(cell)) {
      return;
    }
    setBoard(board => {
      const b = (game.state === 'NEW')
        ? addMines(size, board, cell)
        : board;
      return showCells(b, [cell])
    })
  }, [game.state, size])

  const handleCellRightClick = useCallback((cell: Cell) => {
    setBoard(b => cellNextHiddenState(b, cell));
  }, [])

  const handleCellBothClick = useCallback((cell: Cell) => {
    setBoard(board => {
      return (game.state !== 'NEW')
        ? showCellsAround(board, cell)
        : board
    });
  }, [game.state])

  const handleNewGame = useCallback(() => {
    setBoard(generateEmptyBoard(size));
    setGame(Game.newGame(size.mines));
  }, [size])

  const handleMenuChange = (menuItem: string) => {
    const handleNewGame = (size: Size) => {
      setSize(size);
      setBoard(generateEmptyBoard(size));
      setGame(Game.newGame(size.mines));
    }
    switch (menuItem.toLocaleUpperCase()) {
      case 'BEGINNER':
        return handleNewGame(SIZES.beginner);
      case 'INTERMEDIATE':
        return handleNewGame(SIZES.intermediate);
      case 'EXPERT':
        return handleNewGame(SIZES.expert);
    }
  }

  return (
    <AppStyled>
      <BorderOuter>
        <BorderInner>
          <Controls
            onNewGame={handleNewGame}
            game={game}
          />
          <Board
            board={board}
            size={size}
            onCellClick={handleCellClick}
            onCellRightClick={handleCellRightClick}
            onCellBothClick={handleCellBothClick}
            game={game}
          />
        </BorderInner>
      </BorderOuter>
      <Sidebar onChange={handleMenuChange} />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
`;

const BorderInner = styled.div`
  border: 18px solid #BDBDBD;
`;

const BorderOuter = styled.div`
  margin: 0 auto;
  border-top: 3px solid #FFF;
  border-right: 3px solid #7B7B7B;
  border-bottom: 3px solid #7B7B7B;
  border-left: 3px solid #FFF;
`;

export default App;
