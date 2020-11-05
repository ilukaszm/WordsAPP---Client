import styled from 'styled-components';

import { Paragraph } from 'components';

export const StyledWrapper = styled.div`
  position: fixed;
  bottom: 12%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 300px;
  padding: 10px 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  animation: infoBarAppear 0.3s ease-in-out;
  z-index: 9999;

  @keyframes infoBarAppear {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    bottom: auto;
    left: auto;
    top: 10%;
    right: 5px;
    transform: translate(-5px, -10%);
  }

  > svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  width: 270px;
`;
