import styled from 'styled-components';

import { Heading } from 'components';
import closeIcon from 'assets/icons/close.svg';

export const StyledShadow = styled.div<{ visibility: boolean }>`
  display: ${({ visibility }) => (visibility ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.13);

  ${({ theme: { devices } }) => devices.tabletL} {
    display: none;
  }
`;

export const StyledWrapper = styled.div<{ visibility: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 95vw;
  height: 60vh;
  display: ${({ visibility }) => (visibility ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all ease-in 0.6s;
  ${({ theme: { devices } }) => devices.tablet} {
    height: 50vh;
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    width: 50vw;
    height: 60vh;
    border: 2px solid ${({ theme }) => theme.colors.black};
  }
`;

export const StyledHeading = styled(Heading)`
  margin-top: 30px;
`;

export const StyledForm = styled.form`
  margin-top: 58px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: block;
  border: none;
  background: none;
  background-image: url(${closeIcon});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
`;
