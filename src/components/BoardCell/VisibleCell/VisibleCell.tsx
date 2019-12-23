import React from 'react';
import styled from 'styled-components';
import { Cell } from '../../../types/Cell';
import Mine from './Mine';
import Number from './Number';

interface Props {
  firstRow: boolean;
  firstCol: boolean;
  cell: Cell;
}

const VisibleCell: React.FC<Props> = ({ firstRow, firstCol, cell }) => {
  return (
    <VisibleCellStyled firstRow={firstRow} firstCol={firstCol}>
      {cell.mine
        ? <Mine cell={cell} />
        : <Number minesAround={cell.minesAround} />
      }
    </VisibleCellStyled>
  );
}

const VisibleCellStyled = styled.div<Pick<Props, 'firstCol' | 'firstRow'>>`  
  border-left: ${p => p.firstCol ? '0' : '3px solid #7B7B7B'};
  border-top: ${p => p.firstRow ? '0' : '3px solid #7B7B7B'}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 100%;
  height: 100%; 
`;

export default VisibleCell;