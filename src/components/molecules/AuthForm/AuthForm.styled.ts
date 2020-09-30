import styled from 'styled-components';

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