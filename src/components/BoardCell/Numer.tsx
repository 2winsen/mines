import React from 'react';
import styled from 'styled-components';

interface Props {
  minesAround: number;
}

const numberToColor = (minesAround: number) => {
  switch (minesAround) {
    case 1:
      return '#0000FF';
    case 2:
      return '#007B00';
    case 3:
      return '#FF0000';
    case 4:
      return '#00007B';
    case 5:
      return '#7B0000';
    case 6:
      return '#007B7B';
    case 7:
      return '#000000';
    case 8:
      return '#7B7B7B';
    default:
      return '#000';
  }
}

const Number: React.FC<Props> = ({ minesAround }) => {
  return (
    <NumberStyled style={{ color: numberToColor(minesAround) }}>
      {minesAround === 0 ? '' : minesAround}
    </NumberStyled>
  )
}

const NumberStyled = styled.div`
  text-align: center;
  font-size: 8vmin;
  font-family: monospace;
  font-weight: bold;
`;

export default Number;