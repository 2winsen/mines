import React from 'react';
import styled from 'styled-components';
import { cellSize } from '../../../services/constants';

interface Props {
  minesAround: number;
}

const Number: React.FC<Props> = ({ minesAround }) => {
  return (
    <NumberStyled className={`color${minesAround} text`}>
      {minesAround === 0 ? '' : minesAround}
    </NumberStyled>
  )
}

const NumberStyled = styled.div`
  text-align: center;
  font-size: ${cellSize - 5}px;
  font-weight: bold;
  &.color1 {
    color: #0000FF;
  }
  &.color2 {
    color: #007B00;
  }
  &.color3 {
    color: #FF0000;
  }
  &.color4 {
    color: #00007B;
  }
  &.color5 {
    color: #7B0000;
  }
  &.color6 {
    color: #007B7B;
  }
  &.color7 {
    color: #000000;
  }
  &.color8 {
    color: #7B7B7B;
  }
`;

export default Number;