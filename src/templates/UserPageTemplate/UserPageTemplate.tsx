import React, { FC } from 'react';

import {
  StyledWrapper,
  InnerWrapper,
  StyledLogo,
  StyledHeading,
  StyledNavBar,
} from './UserPageTemplate.styled';

interface UserPageTemplateProps {
  viewType: 'wordsList' | 'flashcards' | 'game';
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
        </StyledHeading>
        {children}
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default UserPageTemplate;
