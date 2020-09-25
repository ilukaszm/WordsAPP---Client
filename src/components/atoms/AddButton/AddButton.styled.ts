import styled from 'styled-components';

const StyledAddButton = styled.button`
  cursor: pointer;
  position: relative;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  transition: all 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryRed};
  }

  ${({ theme: { devices } }) => devices.tablet} {
    width: 77px;
    height: 77px;
  }

  svg {
    position: absolute;
    width: 26px;
    height: 26px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${({ theme: { devices } }) => devices.tablet} {
      width: 36px;
      height: 36px;
    }
  }
`;

export default StyledAddButton;
