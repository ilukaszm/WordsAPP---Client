import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Heading, Logo, ButtonLink } from 'components';
import routes from 'routes';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin-top: 28px;
  margin-bottom: 16px;
  text-align: center;
`;

export const StyledButtonLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.primaryRed};
  text-decoration: none;
`;

const ErrorPageTemplate: FC = () => {
  return (
    <StyledWrapper>
      <Logo />
      <StyledHeading>
        404 - page not found.{' '}
        <span role="img" aria-label="emoji with worried face">
          😟
        </span>
      </StyledHeading>
      <StyledButtonLink to={routes.home} as={Link}>
        Back to home page
      </StyledButtonLink>
    </StyledWrapper>
  );
};

export default ErrorPageTemplate;
