import React, { FC } from 'react';

import { Paragraph, ButtonLink, AuthForm, InfoBar, InfoBarWrapper } from 'components';
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
  integrateError?: string;
}

const LoginPageTemplate: FC<LoginPageTemplateProps> = ({
  viewType,
  handlerFn,
  integrateError,
  children,
}) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledLogoSmall variant="small" />
        <Paragraph>
          {viewType === 'register' ? 'Have you an account?' : "Don't you have an account?"}
          &nbsp;
          <ButtonLink onClick={handlerFn}>
            {viewType === 'register' ? 'Sign In' : 'Sign Up'}
          </ButtonLink>
        </Paragraph>
      </StyledHeader>
      <StyledLogoBig variant="big" />
      <InnerWrapper>
        <StyledHeading>{viewType === 'register' ? 'Sign Up' : 'Sign In'}</StyledHeading>
        {integrateError && (
          <InfoBarWrapper>
            <InfoBar icon="error">{integrateError}</InfoBar>
          </InfoBarWrapper>
        )}
        <StyledSocialButtonWrapper>{children}</StyledSocialButtonWrapper>
        <AuthForm viewType={viewType} />
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LoginPageTemplate;
