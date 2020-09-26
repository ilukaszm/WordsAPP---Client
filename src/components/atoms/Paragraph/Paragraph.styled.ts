import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.sizes.S};

  ${({ theme: { devices } }) => devices.tablet} {
    font-size: ${({ theme }) => theme.sizes.L};
  }
`;

export default StyledParagraph;
