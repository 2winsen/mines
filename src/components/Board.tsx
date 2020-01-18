import React from 'react';
import BoardCell from './BoardCell/BoardCell';
import { Cell } from '../types/Cell';
import styled from 'styled-components';
import { Size } from '../types/Size';
import { Game } from '../types/Game';
import If from './If';

interface Props {
  board: Cell[][];
  size: Size;
  onCellClick: (cell: Cell) => void;
  onCellRightClick: (cell: Cell) => void;
  onCellBothClick: (cell: Cell) => void;
  game: Game;
}

const Board: React.FC<Props> = ({ board, onCellClick, onCellRightClick, onCellBothClick, game }) => {
  return (
    <BoardStyled
      onDragStart={(e) => e.preventDefault()}
      onDrag={(e) => e.preventDefault()}>
      <If condition={game.state === 'WON' || game.state === 'LOST'}>
        <Overlay onContextMenu={e => e.preventDefault()} />
      </If>
      {board.map((row, ri) =>
        <RowStyled key={ri}>
          {row.map((cell, ci) =>
            <BoardCell
              key={`${ri}_${ci}`}
              cell={cell}
              onClick={onCellClick}
              onRightClick={onCellRightClick}
              onBothClick={onCellBothClick}
            />
          )}
        </RowStyled>
      )}
    </BoardStyled>

  )
}

const BoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 5px solid #7B7B7B;
  border-right: 5px solid #FFFFFF;
  border-bottom: 5px solid #FFFFFF;
  border-left: 5px solid #7B7B7B;
  box-sizing: border-box;
  background-color: #BDBDBD;  
  position: relative;
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

export default Board;
