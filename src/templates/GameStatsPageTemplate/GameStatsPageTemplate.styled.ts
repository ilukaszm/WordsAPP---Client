import styled from 'styled-components';

import { Paragraph } from 'components';

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 0.25fr;

  ${({ theme: { devices } }) => devices.tabletL} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PlayersWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 0.75fr 0.25fr;

  ${({ theme: { devices } }) => devices.tabletL} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Player = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  > p {
    margin-left: 16px;
  }
`;
export const Points = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bolds.bold};
  width: 100%;
`;

export const Numbers = styled(Paragraph)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
