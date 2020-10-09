import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 9998;
  padding: 30px 0;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: space-around;
  align-items: center;

  > ul {
    list-style: none;
    width: 80%;
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      margin: 0 30px auto;
    }
  }

  ${({ theme: { devices } }) => devices.tablet} {
    height: 85px;
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    width: 110px;
    height: 100vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    > ul {
      height: 80%;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      > div {
        margin: 0;
        display: block;
      }
    }
  }
`;

export const NavBarItem = styled.a`
  cursor: pointer;
  margin-left: 5px;
  display: block;
  text-decoration: none;
  transition: all 0.3s;

  &.active {
    svg {
      opacity: 0.3;
    }
  }

  svg {
    transition: all 0.3s;
  }

  :hover {
    svg {
      transform: scale(1.1);
    }
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    margin: 0;
    margin-top: 20px;
  }
`;
