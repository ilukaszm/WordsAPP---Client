import styled from 'styled-components';

export const StyledCard = styled.div<{ clicked: boolean }>`
  cursor: pointer;
  position: relative;
  margin-bottom: 58px;
  width: 300px;
  height: 180px;
  color: ${({ theme }) => theme.colors.white};
  animation: move 0.3s ease-in-out;

  @keyframes move {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  > div {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 30px;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
    transform: ${({ clicked }) => (clicked ? 'rotateY(180deg)' : 'none')};
  }

  > div > figure {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    transition: transform 0.8s ease-in-out;
    backface-visibility: hidden;

    > p {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  > div > figure:first-child {
    display: ${({ clicked }) => clicked && 'none'};
  }

  > div > figure:last-child {
    display: ${({ clicked }) => (clicked ? 'flex' : 'none')};
    transform: ${({ clicked }) => (clicked ? 'rotateY(180deg)' : 'none')};
  }

  ${({ theme: { devices } }) => devices.tablet} {
    width: 580px;
    height: 380px;
  }

  ${({ theme: { devices } }) => devices.desktop} {
    width: 680px;
    height: 380px;
  }
`;
