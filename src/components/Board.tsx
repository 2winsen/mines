import React from 'react';
import BoardCell from './BoardCell';
import { Cell } from '../types/Cell';
import styled from 'styled-components';

interface Props {
  board: Cell[][];
}

const Board: React.FC<Props> = ({ board }) => {
  return (
    <BoardStyled>
      {board.map(row => (
        <RowStyled>
          {row.map(cell => (
            <ColumnStyled>
              <BoardCell cell={cell} />
            </ColumnStyled>
          ))}
        </RowStyled>
      ))}
    </BoardStyled>
  )
}

const BoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const RowStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ColumnStyled = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid red;
  height: 50%;
  width: 50%;
`;

export default Board;
