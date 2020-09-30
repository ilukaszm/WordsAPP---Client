import styled from 'styled-components';

import { Logo, Heading } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLogo = styled(Logo)`
  margin: 20px 0;
`;

export const StyledHeading = styled(Heading)`
  padding: 10px;
  font-weight: ${({ theme }) => theme.bolds.light};
`;
