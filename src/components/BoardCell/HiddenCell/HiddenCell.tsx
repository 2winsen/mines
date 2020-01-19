import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import If from '../../If';
import { Cell } from '../../../types/Cell';
import { ReactComponent as FlagIcon } from '../../../assets/images/flag.svg';
import useEffectOnUpdate from '../../../services/useEffectOnUpdate';
import { cellSize } from '../../../services/constants';

interface Props {
  cell: Cell;
}

const HiddenCell: React.FC<Props> = ({ cell }) => {
  const [touched, setTouched] = useState('');

  useEffectOnUpdate(() => {
    setTouched('touched');
  }, [cell.state])

  return (
    <HiddenStyled className={cell.state}>
      <AnimationContainer>
        <If condition={cell.state === 'QUESTIONED' || cell.state === 'HIDDEN'}>
          <QuestionIconStyled className={`text ${cell.state} ${touched}`}>?</QuestionIconStyled>
        </If>
        <If condition={cell.state === 'FLAGGED'}>
          <FlagIconStyled />
        </If>
      </AnimationContainer>
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
`;

const show = keyframes`
  from {
    transform: scale(8, 8);
    opacity: 0.3;
  }

  to {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: scale(8, 8);
    opacity: 0;
  }
`;

const FlagIconStyled = styled(FlagIcon)`
  width: 75%;
  height: 75%;
  animation: ${show} 0.15s ease-in;
`;

const QuestionIconStyled = styled.div`
    font-family: sans-serif;
    font-size: ${cellSize - 10}px;
    font-weight: bold;
    cursor: default;
    animation: ${show} 0.15s ease-in;
    &.HIDDEN {
      display: none;
    }
    &.HIDDEN.touched {
      animation: ${hide} 0.15s ease-out;      
    }
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; 
`;

export default HiddenCell;