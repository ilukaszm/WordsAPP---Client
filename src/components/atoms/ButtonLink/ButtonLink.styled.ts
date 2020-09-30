import styled from 'styled-components';

export const StyledButtonLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryRed};
  font-size: ${({ theme }) => theme.sizes.S};
  transition: all 0.3s;

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
