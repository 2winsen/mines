import React from 'react';
import styled from 'styled-components';
import { Cell } from '../../types/Cell';
import If from '../If';
import VisibleCell from './VisibleCell/VisibleCell';
import HiddenCell from './HiddenCell/HiddenCell';
import MouseClickHandler from '../MouseClickHandler';

interface Props {
  cell: Cell;
  maxDimension: number;
  firstRow: boolean;
  firstCol: boolean;
  onClick: (cell: Cell) => void;
  onRightClick: (cell: Cell) => void;
  onBothClick: (cell: Cell) => void;
}

const BoardCell: React.FC<Props> = ({ cell, maxDimension, firstCol, firstRow, onClick, onRightClick, onBothClick }) => {
  const handleBothClick = () => {
    onBothClick(cell);
  }

  const handleLeftClick = () => { 
    if (cell.state === 'HIDDEN') {
      onClick(cell);
    }
  }

  const handleRightClick = () => {
    onRightClick(cell);
  }

  return (
    <MouseClickHandlerStyled
      maxDimension={maxDimension}
      onLeftClick={handleLeftClick}
      onRightClick={handleRightClick}
      onBothClick={handleBothClick}
    >
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
    </MouseClickHandlerStyled>
  );
}

const MouseClickHandlerStyled = styled(MouseClickHandler)<{ maxDimension: number }>`
  display: flex;
  width: 40px;
  height: 40px;
`;

export default React.memo(BoardCell);
