import React from 'react';
import styled from 'styled-components';
import If from '../../If';
import { Cell } from '../../../types/Cell';
import { ReactComponent as FlagIcon } from '../../../assets/images/flag.svg';
import { cellBorders } from '../VisibleCell/VisibleCell';

interface Props {
  cell: Cell;
}

const HiddenCell: React.FC<Props> = ({ cell }) => {
  return (
    <HiddenStyled>
      <If condition={cell.state === 'FLAGGED'}>
        <FlagIconStyled />
      </If>
      <If condition={cell.state === 'QUESTIONED'}>
        <QuestionIconStyled className="text">?</QuestionIconStyled>
      </If>
    </HiddenStyled>
  );
}

const HiddenStyled = styled.div`
  width: 100%;
  height: 100%; 
  background-color: #C0C0C0;
  border-top: 4px solid #FFFFFF;
  border-right: 4px solid #808080;
  border-bottom: 4px solid #808080;
  border-left: 4px solid #FFFFFF;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    ${cellBorders}
    border-right: 0; 
    border-bottom: 0;     
  }
`;

const FlagIconStyled = styled(FlagIcon)`
  width: 60%;
  height: 60%; 
`;

const QuestionIconStyled = styled.div`
    font-size: 25px;
    font-family: sans-serif;
    font-weight: bold;
    cursor: default;
`;

export default HiddenCell;