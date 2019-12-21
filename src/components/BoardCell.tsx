import React from 'react';
import styled from 'styled-components';
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

const CellStyled = styled.div`
  width: 100%;
  height: 100%;
`;

const Mine = styled.div`
`;

const Number = styled.div`
`;

const Hidden = styled.div`
  width: 100%;
  height: 100%;
  background-color: #C0C0C0;
`;

export default BoardCell;
