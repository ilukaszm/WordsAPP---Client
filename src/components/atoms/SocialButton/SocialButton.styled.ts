import styled from 'styled-components';

const StyledSocialButton = styled.button`
  cursor: pointer;
  position: relative;
  width: 31px;
  height: 31px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }

  :focus {
    outline: none;
  }

  ${({ theme: { devices } }) => devices.tablet} {
    width: 51px;
    height: 51px;
  }

  svg {
    position: absolute;
    width: 70%;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default StyledSocialButton;
