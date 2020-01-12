import React from 'react';
import styled from 'styled-components';
import { Cell } from '../../types/Cell';
import If from '../If';
import VisibleCell from './VisibleCell/VisibleCell';
import HiddenCell from './HiddenCell/HiddenCell';
import MouseClickHandler from '../MouseClickHandler';

interface Props {
  cell: Cell;
  firstRow: boolean;
  firstCol: boolean;
  onClick: (cell: Cell) => void;
  onRightClick: (cell: Cell) => void;
  onBothClick: (cell: Cell) => void;
}

const BoardCell: React.FC<Props> = ({ cell, firstCol, firstRow, onClick, onRightClick, onBothClick }) => {
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

const MouseClickHandlerStyled = styled(MouseClickHandler)`
  display: flex;
  width: 40px;
  height: 40px;
`;

const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.cell.state === nextProps.cell.state;
};
export default React.memo(BoardCell, areEqual);
