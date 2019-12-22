import React from 'react';
import BoardCell from './BoardCell/BoardCell';
import { Cell } from '../types/Cell';
import styled from 'styled-components';
import { Size } from '../types/Size';

interface Props {
  board: Cell[][];
  size: Size;
}

const Board: React.FC<Props> = ({ board, size }) => {
  const maxDimension = size.rows > size.columns ? size.rows : size.columns;
  return (
    <BoardStyled>
      {board.map((row, ri) =>
        <RowStyled key={ri}>
          {row.map((cell, ci) =>
            <BoardCell
              key={ci}
              cell={cell}
              maxDimension={maxDimension}
              firstCol={ci === 0}
              firstRow={ri === 0}
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
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Board;
