import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ListIcon, AddIcon, RepeatGameIcon, LogOutIcon } from 'assets';
import { Avatar } from 'components';
import routes from 'routes';
import { auth } from 'services/firebase';
import { useAuthContext } from 'contexts/AuthContext';
import { StyledNavBar, NavBarItem } from './NavBar.styled';

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
  const { avatarURL }: any = useAuthContext();

  return (
    <StyledNavBar className={className} data-testid="navbar">
      <Avatar avatarURL={avatarURL} />
      <ul>
        <div>
          <li>
            <NavBarItem to={routes.wordsList} as={NavLink}>
              <ListIcon />
            </NavBarItem>
          </li>
          <li>
            <NavBarItem to={routes.addWord} as={NavLink}>
              <AddIcon />
            </NavBarItem>
          </li>
          <li>
            <NavBarItem to={routes.game} as={NavLink}>
              <RepeatGameIcon />
            </NavBarItem>
          </li>
        </div>
        <li>
          <NavBarItem to={routes.login} as={NavLink}>
            <LogOutIcon onClick={() => auth().signOut()} />
          </NavBarItem>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
