import React, { FC } from 'react';

import { ListIcon, AddIcon, RepeatGameIcon, LogOutIcon } from 'assets';
import { Avatar } from 'components';
import { StyledNavBar, NavBarItem } from './NavBar.styled';

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => (
  <StyledNavBar className={className} data-testid="navbar">
    <Avatar />
    <ul>
      <div>
        <li>
          <NavBarItem>
            <ListIcon />
          </NavBarItem>
        </li>
        <li>
          <NavBarItem>
            <AddIcon />
          </NavBarItem>
        </li>
        <li>
          <NavBarItem>
            <RepeatGameIcon />
          </NavBarItem>
        </li>
      </div>
      <li>
        <NavBarItem>
          <LogOutIcon />
        </NavBarItem>
      </li>
    </ul>
  </StyledNavBar>
);

export default NavBar;
