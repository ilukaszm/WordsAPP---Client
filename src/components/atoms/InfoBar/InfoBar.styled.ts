import styled from 'styled-components';

import { Paragraph } from 'components';

export const StyledWrapper = styled.div`
  margin-bottom: 8px;
  width: 300px;
  padding: 10px 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  animation: infoBarAppear 0.3s ease-in-out;

  @keyframes infoBarAppear {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
