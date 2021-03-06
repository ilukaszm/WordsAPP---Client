import React, { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ListIcon, FlashcardIcon, RepeatGameIcon, SettingsIcon, LogOutIcon } from 'assets';
import routes from 'routes';
import { auth } from 'services/firebase';
import { selectUserProfile } from 'data/slices/userProfileSlice';
import { StyledNavBar, NavBarItem, StyledAvatar } from './NavBar.styled';

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
  const { avatarURL } = useSelector(selectUserProfile) || '';

  return (
    <StyledNavBar className={className} data-testid="navbar">
      <Link to={routes.profile}>
        <StyledAvatar avatarURL={avatarURL} />
      </Link>
      <ul>
        <div>
          <li>
            <NavBarItem to={routes.wordsList} as={NavLink}>
              <ListIcon />
            </NavBarItem>
          </li>
          <li>
            <NavBarItem to={routes.flashcards} as={NavLink}>
              <FlashcardIcon />
            </NavBarItem>
          </li>
          <li>
            <NavBarItem to={routes.game} as={NavLink}>
              <RepeatGameIcon />
            </NavBarItem>
          </li>
          <li>
            <NavBarItem to={routes.profile} as={NavLink}>
              <SettingsIcon />
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
