import React, { useState, useEffect, useCallback } from 'react';
import Board from './components/Board';
import { Size } from './types/Size';
import { Cell } from './types/Cell';
import styled from 'styled-components';
import { generateEmptyBoard, isLost, isNewBoard, addMines, showCells, cellNextHiddenState, isWon, showCellsAround } from './services/boardUtils';
import { Game } from './types/Game';

const SIZES = {
  beginner: { rows: 9, columns: 9, mines: 10 },
  intermediate: { rows: 16, columns: 16, mines: 40 },
  expert: { rows: 16, columns: 30, mines: 99 },
  test: { rows: 50, columns: 50, mines: 300 },
};

const updatedGame = (board: Cell[][], game: Game): Game => {
  const updated = { ...game };
  if (isLost(board)) {
    updated.lost = true;
  } else if (isWon(board)) {
    updated.won = true;
  }
  return updated;
}

const App: React.FC = () => {
  const [size] = useState<Size>(SIZES.beginner);
  const [board, setBoard] = useState<Cell[][]>(generateEmptyBoard(size));
  const [game, setGame] = useState<Game>({
    lost: false,
    won: false,
    minesLeft: size.mines,
  })

  useEffect(() => {
    setGame(game => updatedGame(board, game));
  }, [board]);

  useEffect(() => {
    if (game.lost) {
      console.log('LOST');
    }
    if (game.won) {
      console.log('WON');
    }
  }, [game]);

  const handleCellClick = useCallback((cell: Cell) => {
    if (Cell.isAnyOpenedState(cell)) {
      return;
    }
    setBoard(board => {
      const b = isNewBoard(board)
        ? addMines(size, board, cell)
        : board;
      return showCells(b, [cell])
    });
  }, [size])

  const handleCellRightClick = useCallback((cell: Cell) => {
    setBoard(b => cellNextHiddenState(b, cell));
  }, [])

  const handleCellBothClick = useCallback((cell: Cell) => {
    setBoard(board => {
      return !isNewBoard(board)
        ? showCellsAround(board, cell)
        : board
    });
  }, [])

  return (
    <AppStyled>
      <Board
        board={board}
        size={size}
        onCellClick={handleCellClick}
        onCellRightClick={handleCellRightClick}
        onCellBothClick={handleCellBothClick}
        game={game}
      />
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
