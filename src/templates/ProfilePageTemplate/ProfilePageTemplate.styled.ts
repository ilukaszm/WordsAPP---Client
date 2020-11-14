import styled from 'styled-components';

import { Checkbox, Heading, Input, Button, Paragraph } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1024px;
  margin: 0 0 auto;

  ${({ theme: { devices } }) => devices.tablet} {
    margin-top: 25px;
  }
`;

export const InnerWrapper = styled.div`
  margin-bottom: 24px;
  width: 90%;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 45%;
    padding: 0 16px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.sizes.M};
  margin-bottom: 24px;
`;

export const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 12px;
`;

export const StyledInput = styled(Input)`
  width: 150px;
`;

export const StyledUploadButton = styled(Button)`
  margin-top: 24px;
`;
export const StyledFileInput = styled.input`
  margin-top: 24px;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-bottom: 24px;
`;
