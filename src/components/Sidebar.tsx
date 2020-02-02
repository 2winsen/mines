import React, { useState } from 'react';
import styled from 'styled-components';
import If from './If';
import { ReactComponent as HamburgerIcon } from '../assets/images/hamburger.svg';

interface Props {
  onChange: (menuItem: string) => void;
}

const Sidebar: React.FC<Props> = ({ onChange }) => {
  const [opened, setOpened] = useState(false);

  const handleMenuItemClick = (menuItem: string) => {
    onChange(menuItem);
  }

  return (
    <>
      <HamburgerIconStyled onClick={() => setOpened(true)} />
      <SidebarWrapper className={opened ? 'opened' : ''}>
        <nav>
          <ul>
            <MenuItem>
              <AnchorButton onClick={() => handleMenuItemClick('Beginner')}>Beginner</AnchorButton>
            </MenuItem>
            <MenuItem>
              <AnchorButton onClick={() => handleMenuItemClick('Intermediate')}>Intermediate</AnchorButton>
            </MenuItem>
            <MenuItem>
              <AnchorButton onClick={() => handleMenuItemClick('Expert')}>Expert</AnchorButton>
            </MenuItem>
          </ul>
        </nav>
      </SidebarWrapper>
      <If condition={opened}>
        <Backdrop onClick={() => setOpened(false)} />
      </If>
    </>
  )
}

const sidebarWidth = '200px';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${sidebarWidth};
  height: 100%;
  background-color: #fff;
  z-index: 1;
  transition: transform 0.2s ease-in 0s;
  transform: translate3d(-${sidebarWidth}, 0px, 0px);
  &.opened {
    transform: translate3d(0px, 0px, 0px);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #3a3a3a80;
`;

const HamburgerIconStyled = styled(HamburgerIcon)`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

const MenuItem = styled.li`
  list-style-type: none;
  font-size: 16px;
  line-height: 30px;
 `;

const AnchorButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  color: #0000FF;
  cursor: pointer;
`;

export default Sidebar;
