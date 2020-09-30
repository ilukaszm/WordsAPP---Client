import React, { FC } from 'react';

import { Paragraph, ButtonLink, SocialButton, Input, Button } from 'components';
import {
  StyledWrapper,
  InnerWrapper,
  StyledHeader,
  StyledSocialButtonWrapper,
  StyledHeading,
  StyledLogoSmall,
  StyledLogoBig,
  StyledForm,
} from './LoginPageTemplate.styled';

interface LoginPageTemplateProps {
  viewType: 'login' | 'register';
  handlerFn: () => void;
}

const LoginPageTemplate: FC<LoginPageTemplateProps> = ({ viewType, handlerFn }) => {
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
        <StyledSocialButtonWrapper>
          <SocialButton variant="google" />
          <SocialButton variant="facebook" />
        </StyledSocialButtonWrapper>
        <StyledForm>
          <Input type="email" id="email" name="email" label="Email" />
          <Input type="password" id="password" name="password" label="Password" />
          {viewType === 'register' && (
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
            />
          )}

          <Button>{viewType === 'register' ? 'Sign Up' : 'Sign In'}</Button>
        </StyledForm>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LoginPageTemplate;
