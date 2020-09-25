import styled from 'styled-components';

const StyledSocialButton = styled.button`
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default StyledSocialButton;
