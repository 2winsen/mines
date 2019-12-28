import React, { MouseEvent, useState } from 'react';

interface Props {
  onLeftClick: () => void;
  onRightClick: () => void;
  onBothClick: () => void;
  maxDimension: number;
}

const MouseClickHandler: React.FC<Props> = ({ children, onLeftClick, onRightClick, onBothClick, maxDimension, ...rest }) => {
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const reset = () => {
    setRightClicked(false);
    setLeftClicked(false);
  }

  const checkClick = () => {
    if (rightClicked && leftClicked) {
      onBothClick();
    } else if (leftClicked) {
      onLeftClick();
    } else if (rightClicked) {
      onRightClick();
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
    <div
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
      {...rest}
    >
      {children}
    </div>
  );
}

export default MouseClickHandler;
