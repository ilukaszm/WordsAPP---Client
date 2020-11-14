import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';
import { Paragraph } from 'components';
import {
  StyledWrapper,
  InnerWrapper,
  StyledHeading,
  StyledLogo,
  StyledButtonLink,
} from './ResetPasswordPageTemplate.styled';

const ResetPasswordPageTemplate: FC = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledLogo />
      <InnerWrapper>
        <StyledHeading>Reset your password</StyledHeading>
        <Paragraph>
          Type your email to receive more information.{' '}
          <span role="img" aria-label="emoji with smile face">
            😉
          </span>
        </Paragraph>
        {children}
        <StyledButtonLink to={routes.login} as={Link}>
          Return to login page
        </StyledButtonLink>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default ResetPasswordPageTemplate;
