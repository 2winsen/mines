import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { Cell } from '../../types/Cell';
import If from '../If';
import VisibleCell from './VisibleCell/VisibleCell';
import HiddenCell from './HiddenCell/HiddenCell';

interface Props {
  cell: Cell;
  maxDimension: number;
  firstRow: boolean;
  firstCol: boolean;
  onClick: (cell: Cell) => void;
  onRightClick: (cell: Cell) => void;
}

const BoardCell: React.FC<Props> = ({ cell, maxDimension, firstCol, firstRow, onClick, onRightClick }) => {
  const handleOnContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    onRightClick(cell)
  }

  return (
    <CellStyled maxDimension={maxDimension} onClick={() => onClick(cell)} onContextMenu={handleOnContextMenu}>
      <If condition={Cell.isAnyHiddenState(cell)}>
        <HiddenCell
          cell={cell}
        />
      </If>
      <If condition={Cell.isAnyOpenedState(cell)}>
        <VisibleCell
          firstCol={firstCol}
          firstRow={firstRow}
          cell={cell}
        />
      </If>
    </CellStyled>
  );
}

const CellStyled = styled.div<{ maxDimension: number }>`
  display: flex;
  width: ${p => `calc(90vmin / ${p.maxDimension})`};
  height: ${p => `calc(90vmin / ${p.maxDimension})`};
`;

export default BoardCell;
