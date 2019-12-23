import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MineIcon } from '../../assets/images/mine.svg';
import { Cell } from '../../types/Cell';

interface Props {
  cell: Cell;
}

const Mine: React.FC<Props> = ({ cell }) => {
  return (
    <MineContainer className={cell.state === 'EXPLODED' ? 'exploded' : ''}>
      <MineStyled />
    </MineContainer>
  );
}

const MineContainer = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  &.exploded {
    background-color: #FF0000;
  }
`;

const MineStyled = styled(MineIcon)`
  width: 60%;
  height: 60%; 
`;

export default Mine;