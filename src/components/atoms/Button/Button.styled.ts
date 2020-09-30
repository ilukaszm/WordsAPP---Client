import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  width: 157px;
  height: 40px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.bolds.regular};
  font-size: ${({ theme }) => theme.sizes.M};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 240px;
    height: 60px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryRed};
  }
`;

export default StyledButton;
