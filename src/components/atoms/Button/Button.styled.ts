import styled from 'styled-components';

const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  cursor: pointer;
  display: block;
  width: 157px;
  height: 40px;
  border: ${({ theme, variant }) =>
    variant === 'primary' ? 'none' : `1px solid ${theme.colors.primaryRed}`};
  border-radius: 50px;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primaryRed : theme.colors.white};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.bolds.regular};
  font-size: ${({ theme }) => theme.sizes.M};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.primaryRed};
  transition: all 0.3s;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 240px;
    height: 60px;
  }

  :hover {
    background-color: ${({ theme, variant }) => variant === 'primary' && theme.colors.secondaryRed};
    color: ${({ theme, variant }) => variant === 'secondary' && theme.colors.secondaryRed};
    border-color: ${({ theme, variant }) => variant === 'secondary' && theme.colors.secondaryRed};
  }

  :focus {
    outline: none;
  }
`;

export default StyledButton;
