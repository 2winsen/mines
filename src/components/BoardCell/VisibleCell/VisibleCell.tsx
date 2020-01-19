import React from 'react';
import styled, { css } from 'styled-components';
import { Cell } from '../../../types/Cell';
import Mine from './Mine';
import Number from './Number';
import { ReactComponent as MineWrongIcon } from '../../../assets/images/mine-wrong.svg';

interface Props {
  cell: Cell;
}

const VisibleCell: React.FC<Props> = ({ cell }) => {
  const renderCell = () => {
    if (cell.state === 'FLAGGED_WRONG') {
      return (
        <FlaggedWrong>
          <MineWrongIcon />
        </FlaggedWrong>
      )
    }
    if (cell.mine) {
      return <Mine cell={cell} />;
    } else {
      return <Number minesAround={cell.minesAround} />;
    }
  }


  return (
    <VisibleCellStyled>
      {renderCell()}
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

const FlaggedWrong = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;  
  & svg {
    width: 25px;
    height: 25px;
  }
`;

export default VisibleCell;