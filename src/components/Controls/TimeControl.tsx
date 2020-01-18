import React, { useEffect, useState } from 'react';
import { GameState } from '../../types/Game';
import { controlsFormat } from './Controls';

interface Props {
  state: GameState;
}

const TimeControl: React.FC<Props> = ({ state }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = 0;
    if (state === 'NEW') {
      clearTimeout(timer);
      setTime(0);
    }
    if (state === 'IN_PROCESS') {
      if (time === 0) {
        setTime(time => time + 1);
      }
      timer = setTimeout(() => setTime(time => time + 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [state, time])

  return (
    <>
      {controlsFormat(time)}
    </>
  )
}

export default TimeControl;
