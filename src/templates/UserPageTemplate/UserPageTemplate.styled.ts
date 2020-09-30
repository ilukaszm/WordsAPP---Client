import styled from 'styled-components';

import { Logo, Heading, NavBar } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  padding: 20px;
  ${({ theme: { devices } }) => devices.tabletL} {
    margin-left: 145px;
  }
`;

export const StyledLogo = styled(Logo)`
  margin: 20px 0;

  ${({ theme: { devices } }) => devices.tabletL} {
    margin: 0;
    width: 15%;
    position: fixed;
    top: 10px;
    right: 10px;
  }
`;

export const StyledNavBar = styled(NavBar)`
  ${({ theme: { devices } }) => devices.tabletL} {
    position: fixed;
  }
`;

export const StyledHeading = styled(Heading)`
  padding: 10px;
  font-weight: ${({ theme }) => theme.bolds.light};
`;
