import React, { MouseEvent, useState } from 'react';
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
  onBothClick: (cell: Cell) => void;
}

const BoardCell: React.FC<Props> = ({ cell, maxDimension, firstCol, firstRow, onClick, onRightClick, onBothClick }) => {
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const reset = () => {
    setRightClicked(false);
    setLeftClicked(false);
  }

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

  const checkClick = () => {
    if (rightClicked && leftClicked) {
      handleBothClick()
    } else if (leftClicked) {
      handleLeftClick()
    } else if (rightClicked) {
      handleRightClick()
    }
    reset();
  }

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    checkClick();
  }

  const handleClick = () => checkClick();  

  const handleMouseDown = (e: MouseEvent) => {
    if (e.nativeEvent.which === 1) {
      setLeftClicked(true);
    } else if (e.nativeEvent.which === 3) {
      setRightClicked(true);
    };
  }

  return (
    <CellStyled
      maxDimension={maxDimension}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
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
    </CellStyled>
  );
}

const CellStyled = styled.div<{ maxDimension: number }>`
  display: flex;
  width: ${p => `calc(90vmin / ${p.maxDimension})`};
  height: ${p => `calc(90vmin / ${p.maxDimension})`};
`;

export default React.memo(BoardCell);
