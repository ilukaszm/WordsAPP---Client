import styled from 'styled-components';

import { Logo, Heading } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const StyledHeading = styled(Heading)`
  font-weight: ${({ theme }) => theme.bolds.regular};
  margin: 30px 0 20px;
  text-align: center;

  ${({ theme: { devices } }) => devices.desktop} {
    margin-top: 75px;
  }
`;

export const StyledSocialButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  margin-bottom: 20px;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 12%;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.tablet} {
    padding: 10px 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${({ theme: { devices } }) => devices.desktop} {
    padding: 10px 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const StyledLogoSmall = styled(Logo)`
  margin: 25px 0;
  ${({ theme: { devices } }) => devices.desktop} {
    display: none;
  }
`;

export const StyledLogoBig = styled(Logo)`
  display: none;
  ${({ theme: { devices } }) => devices.desktop} {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 35%;
    animation: loading 0.8s ease;

    @keyframes loading {
      from {
        opacity: 0;
        transform: translate(-100%);
      }
      to {
        opacity: 1;
        transform: translate(0);
      }
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.desktop} {
    width: 50%;
    height: 85vh;
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
