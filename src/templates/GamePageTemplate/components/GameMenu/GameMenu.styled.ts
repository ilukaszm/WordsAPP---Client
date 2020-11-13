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
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryRed};
  font-size: ${({ theme }) => theme.sizes.S};
  transition: all 0.3s;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryRed};
  }

  :hover {
    color: ${({ theme }) => theme.colors.secondaryRed};
  }

  ${({ theme: { devices } }) => devices.tablet} {
    font-size: ${({ theme }) => theme.sizes.M};
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primaryRed};
  font-size: ${({ theme }) => theme.sizes.S};
  transition: all 0.3s;

  :hover {
    color: ${({ theme }) => theme.colors.secondaryRed};
  }

  :focus {
    outline: none;
  }

  ${({ theme: { devices } }) => devices.tablet} {
    font-size: ${({ theme }) => theme.sizes.M};
  }
`;
