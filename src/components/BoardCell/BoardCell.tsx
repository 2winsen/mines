import React from 'react';
import styled from 'styled-components';
import { Cell } from '../../types/Cell';
import If from '../If';
import VisibleCell from './VisibleCell/VisibleCell';
import HiddenCell from './HiddenCell/HiddenCell';
import MouseClickHandler from '../MouseClickHandler';
import useLongTouch from '../../services/useLongTouch';
import { cellSize } from '../../services/constants';
import { setMultiTouchLockedCell, isMultiTouchLocked } from './BoardCellHelper';

interface Props {
  cell: Cell;
  onClick: (cell: Cell) => void;
  onRightClick: (cell: Cell) => void;
  onBothClick: (cell: Cell) => void;
}

const BoardCell: React.FC<Props> = ({ cell, onClick, onRightClick, onBothClick }) => {

  const handleBothClick = () => {
    onBothClick(cell);
  }

  const handleLeftClick = () => {
    if (cell.state === 'HIDDEN') {
      onClick(cell);
    } else if (cell.state === 'OPENED') {
      onBothClick(cell);
    }
  }

  const handleRightClick = () => {
    onRightClick(cell);
  }

  const handleLongTouch = () => {
    if (Cell.isAnyOpenedState(cell)) {
      handleBothClick();
    }
    if (Cell.isAnyHiddenState(cell)) {
      handleRightClick();
    }
  }

  const { onTouchStart, onTouchEnd } = useLongTouch(handleLongTouch);

  const handleTouchStart = () => {
    if (isMultiTouchLocked(cell)) {
      return;
    }
    onTouchStart();
    // Due to performance reasons not using React state
    setMultiTouchLockedCell(cell);
  }

  const handleTouchEnd = () => {
    onTouchEnd();
    setMultiTouchLockedCell(undefined);
  }

  return (
    <MouseClickHandlerStyled
      onLeftClick={handleLeftClick}
      onRightClick={handleRightClick}
      onBothClick={handleBothClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <If condition={Cell.isAnyHiddenState(cell)}>
        <HiddenCell
          cell={cell}
        />
      </If>
      <If condition={Cell.isAnyOpenedState(cell)}>
        <VisibleCell
          cell={cell}
        />
      </If>
    </MouseClickHandlerStyled>
  );
}

const MouseClickHandlerStyled = styled(MouseClickHandler)`
  display: flex;
  width: ${cellSize}px;
  height: ${cellSize}px;
`;

const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.cell.state === nextProps.cell.state
    && prevProps.onClick === nextProps.onClick
    && prevProps.onRightClick === nextProps.onRightClick
    && prevProps.onBothClick === nextProps.onBothClick;
};
export default React.memo(BoardCell, areEqual);
