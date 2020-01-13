import React from 'react';
import styled, { css } from 'styled-components';
import { Cell } from '../../../types/Cell';
import Mine from './Mine';
import Number from './Number';

interface Props {
  cell: Cell;
}

const VisibleCell: React.FC<Props> = ({ cell }) => {
  return (
    <VisibleCellStyled>
      {cell.mine
        ? <Mine cell={cell} />
        : <Number minesAround={cell.minesAround} />
      }
    </VisibleCellStyled>
  );
}

export const cellBorders = css`
  border-left: 2px solid #7B7B7B;
  border-top: 2px solid #7B7B7B; 
`;

const VisibleCellStyled = styled.div`  
  ${cellBorders}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 100%;
  height: 100%; 
  box-sizing: border-box;
`;

export default VisibleCell;