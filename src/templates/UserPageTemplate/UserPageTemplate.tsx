import React, { FC } from 'react';

import { NavBar } from 'components';
import { StyledWrapper, StyledLogo, StyledHeading } from './UserPageTemplate.styled';

interface UserPageTemplateProps {
  viewType: 'wordsList' | 'addWord' | 'game';
}

const UserPageTemplate: FC<UserPageTemplateProps> = ({ children, viewType }) => {
  return (
    <StyledWrapper>
      <StyledLogo variant="small" />
      <NavBar />
      <StyledHeading>
        {viewType === 'wordsList' && 'Your words'}
        {viewType === 'addWord' && 'Add Word'}
        {viewType === 'game' && 'Game'}
      </StyledHeading>
      {children}
    </StyledWrapper>
  );
};

export default UserPageTemplate;
