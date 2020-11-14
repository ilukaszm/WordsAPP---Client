import styled from 'styled-components';

import { Heading, Logo, Button, Input, ButtonLink } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.sizes.L};
  font-weight: ${({ theme }) => theme.bolds.light};
  margin: 28px 0 36px 0;
`;

export const StyledLogo = styled(Logo)`
  margin-top: 28px;
`;

export const StyledButton = styled(Button)`
  margin-top: 18px;
`;

export const StyledInput = styled(Input)`
  margin-top: 38px;
  width: 250px;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 45%;
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    width: 25%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.primaryRed};
  text-decoration: none;
`;
