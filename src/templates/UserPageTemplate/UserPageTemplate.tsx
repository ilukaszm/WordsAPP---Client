import React, { FC } from 'react';

import {
  StyledWrapper,
  InnerWrapper,
  StyledLogo,
  StyledHeading,
  StyledNavBar,
} from './UserPageTemplate.styled';

type ViewType = 'wordsList' | 'flashcards' | 'game' | 'gameStats' | 'profile';

interface UserPageTemplateProps {
  viewType: ViewType;
}

const UserPageTemplate: FC<UserPageTemplateProps> = ({ children, viewType }) => {
  return (
    <StyledWrapper>
      <StyledLogo variant="small" />
      <StyledNavBar />
      <InnerWrapper>
        <StyledHeading>
          {viewType === 'wordsList' && 'Your words'}
          {viewType === 'flashcards' && 'Flashcards'}
          {viewType === 'game' && 'Game'}
          {viewType === 'gameStats' && 'Game stats'}
          {viewType === 'profile' && 'Your profile'}
        </StyledHeading>
        {children}
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default UserPageTemplate;
