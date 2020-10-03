import styled from 'styled-components';

export const WordWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${({ theme: { devices } }) => devices.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
