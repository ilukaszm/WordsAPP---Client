import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.XL};

  ${({ theme: { devices } }) => devices.tabletL} {
    font-size: ${({ theme }) => theme.sizes.XXL};
  }
`;

export default StyledHeading;
