import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SmileIcon } from '../../assets/images/smile.svg';
import { ReactComponent as SmileLostIcon } from '../../assets/images/smile-lost.svg';
import { ReactComponent as SmileWonIcon } from '../../assets/images/smile-won.svg';
import { Game } from '../../types/Game';
import TimeControl from './TimeControl';

interface Props {
  onNewGame: () => void;
  game: Game;
}

export const controlsFormat = (value: number): string => {
  if (value > 999) {
    return '999';
  }
  if (value < 0) {
    return '000';
  }
  return value.toString().padStart(3, '0');
}

const Controls: React.FC<Props> = ({ onNewGame, game }) => {
  const renderSmileIcon = () => {
    switch (game.state) {
      case 'WON':
        return <SmileWonIcon />;
      case 'LOST':
        return <SmileLostIcon />;
      default:
        return <SmileIcon />;
    }
  }

  return (
    <BorderBottom>
      <ControlsStyled>
        <NumberDisplay className="text">{controlsFormat(game.minesLeft)}</NumberDisplay>
        <StyledButton onClick={onNewGame}>
          <SvgIconContainer>
            {renderSmileIcon()}
          </SvgIconContainer>
        </StyledButton>
        <NumberDisplay className="text">
          <TimeControl state={game.state} />
        </NumberDisplay>
      </ControlsStyled>
    </BorderBottom>
  )
}

const ControlsStyled = styled.div`
  background-color: #C0C0C0;
  border-top: 5px solid #7B7B7B;
  border-right: 5px solid #FFFFFF;
  border-bottom: 5px solid #FFFFFF;
  border-left: 5px solid #7B7B7B;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const BorderBottom = styled.div`
  border-bottom: 18px solid #BDBDBD;
`;

const NumberDisplay = styled.span`
  padding: 0 7px;
  background-color: #000;
  color: #FF0000;
  font-size: 50px;
  line-height: 60px;
  font-family: monospace;
`;

const StyledButton = styled.button`
  background-color: #BDBDBD;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  border-top: 5px solid #FFF;
  border-right: 5px solid #7B7B7B;
  border-bottom: 5px solid #7B7B7B;
  border-left: 5px solid #FFF;
  width: 60px;
  height: 60px;

  &:active {
    border: 4px solid #7B7B7B;
  }
`;

const SvgIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 40px;
    height: 40px; 
  }
`;

export default Controls;
