import styled from 'styled-components';

import { Paragraph, ButtonLink } from 'components';

export const StyledForm = styled.form`
  padding: 20px;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.tablet} {
    padding: 60px;
  }
  ${({ theme: { devices } }) => devices.tabletL} {
    width: 70%;
  }
`;

export const StyledError = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondaryRed};
  font-size: ${({ theme }) => theme.sizes.S};
  animation: errorAppear 0.3s ease;

  @keyframes errorAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.primaryRed};
  text-decoration: none;
`;
