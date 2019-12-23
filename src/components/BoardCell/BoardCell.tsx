import React, { MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { Cell } from '../../types/Cell';
import If from '../If';
import Mine from './Mine';
import Number from './Numer';

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
        <Hidden />
      </If>
      <If condition={Cell.isAnyOpenedState(cell)}>
        <VisibleWrapper className="wrapper" firstCol={firstCol} firstRow={firstRow}>
          {cell.mine
            ? <Mine cell={cell} />
            : <Number minesAround={cell.minesAround} />
          }
        </VisibleWrapper>
      </If>
    </CellStyled>
  );
}

const CellStyled = styled.div<{ maxDimension: number }>`
  display: flex;
  width: ${p => `calc(90vmin / ${p.maxDimension})`};
  height: ${p => `calc(90vmin / ${p.maxDimension})`};
`;

const size = css`
  width: 100%;
  height: 100%; 
`;

const VisibleWrapper = styled.div<Pick<Props, 'firstCol' | 'firstRow'>>`
  ${size}
  border-left: ${p => p.firstCol ? '0' : '3px solid #7B7B7B'};
  border-top: ${p => p.firstRow ? '0' : '3px solid #7B7B7B'}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
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
