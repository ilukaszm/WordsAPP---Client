import styled from 'styled-components';

const StyledItemButton = styled.button`
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  background: none;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default StyledItemButton;
