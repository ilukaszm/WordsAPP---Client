import styled from 'styled-components';

import { Heading, Paragraph, ButtonLink } from 'components';
import keyboardIcon from 'assets/icons/keyboard.svg';
import listIcon from 'assets/icons/list.svg';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 60%;
    margin: 0 auto;
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 24px;
`;

export const StyledImage = styled.img`
  margin-bottom: 58px;
  animation: rotate 0.8s ease;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledParagraph = styled(Paragraph)`
  display: block;
  text-align: left;
  width: 100%;
  margin-bottom: 24px;
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  padding: 20px;
  width: 100%;
  height: 150px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.sizes.M};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.bolds.light};
  color: white;
  margin-bottom: 24px;

  ::placeholder {
    color: white;
  }

  :focus {
    outline: 0;
  }

  ${({ theme: { devices } }) => devices.tablet} {
    height: 300px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  ${({ theme: { devices } }) => devices.tablet} {
    grid-gap: 58px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)<{ list?: boolean }>`
  color: black;
  padding-left: 28px;
  background-image: url(${({ list }) => (list ? listIcon : keyboardIcon)});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 24px;
  margin-bottom: 24px;
`;

export const StyledProgressBar = styled.div<{ percent?: number }>`
  position: relative;
  width: 100%;
  height: 24px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.secondaryRed};
  margin-bottom: 24px;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percent }) => (percent ? `${percent}%` : '0')};
    height: 100%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.primaryRed};
  }
`;

export const AnswerMessage = styled(Paragraph)`
  height: 150px;
  margin-bottom: 24px;
  animation: textAppear 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > b {
    text-align: center;
    margin-bottom: 24px;
  }

  > span {
    display: block;
    font-size: 64px;
    text-align: center;
  }

  ${({ theme: { devices } }) => devices.tablet} {
    height: 300px;
  }

  @keyframes textAppear {
    to {
      opacity: 0;
    }
    from {
      opacity: 1;
    }
  }
`;
