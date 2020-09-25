import styled from 'styled-components';

const StyledButtonLink = styled.a`
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

export default StyledButtonLink;
