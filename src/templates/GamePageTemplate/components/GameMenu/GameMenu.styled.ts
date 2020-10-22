import styled from 'styled-components';

import { ButtonLink } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 60%;
    margin: 0 auto;
  }
`;
export const StyledImage = styled.img`
  margin-bottom: 58px;
  animation: rotate 0.8s ease;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 16px;
`;
