import React, { FC } from 'react';
import styled from 'styled-components';

import { Logo, Paragraph, Heading, ButtonLink, SocialButton, Input, Button } from 'components';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const StyledHeading = styled(Heading)`
  font-weight: ${({ theme }) => theme.bolds.regular};
  margin: 30px 0 20px;
  text-align: center;

  ${({ theme: { devices } }) => devices.desktop} {
    margin-top: 75px;
  }
`;

const StyledSocialButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  margin-bottom: 20px;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 12%;
  }
`;

const StyledForm = styled.form`
  padding: 20px;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.tablet} {
    padding: 60px;
  }
  ${({ theme: { devices } }) => devices.tabletL} {
    width: 70%;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.tablet} {
    padding: 10px 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${({ theme: { devices } }) => devices.desktop} {
    padding: 10px 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

const StyledLogoSmall = styled(Logo)`
  margin: 25px 0;
  ${({ theme: { devices } }) => devices.desktop} {
    display: none;
  }
`;

const StyledLogoBig = styled(Logo)`
  display: none;
  ${({ theme: { devices } }) => devices.desktop} {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 35%;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.desktop} {
    width: 50%;
    height: 85vh;
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const LoginPageTemplate: FC = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledLogoSmall variant="small" />
        <Paragraph>
          You have an account? <ButtonLink>Sign In</ButtonLink>
        </Paragraph>
      </StyledHeader>
      <StyledLogoBig variant="big" />
      <InnerWrapper>
        <StyledHeading>Sign Up</StyledHeading>
        <StyledSocialButtonWrapper>
          <SocialButton variant="google" />
          <SocialButton variant="facebook" />
        </StyledSocialButtonWrapper>
        <StyledForm>
          <Input type="email" id="email" name="email" label="Email" error="rmgklfdmjgklfd" />
          <Input type="password" id="password" name="password" label="Password" />
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
          />
          <Button>Sign Up</Button>
        </StyledForm>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LoginPageTemplate;
