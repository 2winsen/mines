import React from 'react';
import styled, { css } from 'styled-components';
import { Cell } from '../types/Cell';
import If from './If';

interface Props {
  cell: Cell;
}

const BoardCell: React.FC<Props> = ({ cell }) => {
  return (
    <CellStyled>
      <If condition={!cell.visible}>
        <Hidden />
      </If>
      <If condition={cell.visible}>
        {cell.mine ? <Mine /> : <Number>{cell.minesAround}</Number>}
      </If>
    </CellStyled>
  );
}

const size = css`
  width: 100%;
  height: 100%;  
`;

const common = css`
  border-left: 1px solid #7B7B7B;
`;

const CellStyled = styled.div`
  ${size}
`;

const Mine = styled.div`
  ${size}
  ${common}
  background-color: red;  
`;

const Number = styled.div`
  ${size} 
  ${common} 
`;

const Hidden = styled.div`
  ${size}
  background-color: #C0C0C0;
  border-top: 4px solid #FFFFFF;
  border-right: 4px solid #808080;
  border-bottom: 4px solid #808080;
  border-left: 4px solid #FFFFFF;
  box-sizing: border-box;
`;

export default BoardCell;
