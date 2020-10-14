import styled from 'styled-components';

export const WordWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  animation: appear 0.3s ease-in-out;

  @keyframes appear {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
