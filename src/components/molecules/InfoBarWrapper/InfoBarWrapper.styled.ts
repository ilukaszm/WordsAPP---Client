import styled from 'styled-components';

export const StyledInfoBarWrapper = styled.div`
  position: fixed;
  bottom: 12%;
  left: 50%;
  transform: translate(-50%, -10%);
  z-index: 9999;
  display: flex;
  flex-direction: column;

  ${({ theme: { devices } }) => devices.tabletL} {
    bottom: auto;
    left: auto;
    top: 12%;
    right: 5px;
    transform: translate(-5px, -10%);
  }
`;
