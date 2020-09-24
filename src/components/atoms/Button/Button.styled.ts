import styled from 'styled-components';

const StyledButton = styled.button<{ small?: boolean }>`
  cursor: pointer;
  width: ${({ small }) => (small ? '157px' : '240px')};
  height: ${({ small }) => (small ? '40px' : '60px')};
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.bolds.regular};
  font-size: ${({ theme }) => theme.sizes.M};
  color: ${({ theme }) => theme.colors.white};

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryRed};
  }
`;

export default StyledButton;
