import styled from 'styled-components';

import { Heading, ButtonLink } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 60%;
    margin: 0 auto;
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 24px;
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 16px;
`;
