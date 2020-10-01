import React, { FC } from 'react';

import {
  StyledWrapper,
  InnerWrapper,
  StyledLogo,
  StyledHeading,
  StyledNavBar,
} from './UserPageTemplate.styled';

interface UserPageTemplateProps {
  viewType: 'wordsList' | 'addWord' | 'game';
}

const UserPageTemplate: FC<UserPageTemplateProps> = ({ children, viewType }) => {
  return (
    <StyledWrapper>
      <StyledLogo variant="small" />
      <StyledNavBar />
      <InnerWrapper>
        <StyledHeading>
          {viewType === 'wordsList' && 'Your words'}
          {viewType === 'addWord' && 'Add Word'}
          {viewType === 'game' && 'Game'}
        </StyledHeading>
        <div>{children}</div>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default UserPageTemplate;
