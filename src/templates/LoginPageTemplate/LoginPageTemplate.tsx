import React, { FC } from 'react';

import { Paragraph, ButtonLink, AuthForm } from 'components';
import {
  StyledWrapper,
  InnerWrapper,
  StyledHeader,
  StyledSocialButtonWrapper,
  StyledHeading,
  StyledLogoSmall,
  StyledLogoBig,
} from './LoginPageTemplate.styled';

interface LoginPageTemplateProps {
  viewType: 'login' | 'register';
  handlerFn: () => void;
}

const LoginPageTemplate: FC<LoginPageTemplateProps> = ({ viewType, handlerFn, children }) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledLogoSmall variant="small" />
        <Paragraph>
          {viewType === 'register' ? 'You have an account?' : "You don't have an account?"}
          &nbsp;
          <ButtonLink onClick={handlerFn}>
            {viewType === 'register' ? 'Sign In' : 'Sign Up'}
          </ButtonLink>
        </Paragraph>
      </StyledHeader>
      <StyledLogoBig variant="big" />
      <InnerWrapper>
        <StyledHeading>{viewType === 'register' ? 'Sign Up' : 'Sign In'}</StyledHeading>
        <StyledSocialButtonWrapper>{children}</StyledSocialButtonWrapper>
        <AuthForm viewType={viewType} />
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LoginPageTemplate;
