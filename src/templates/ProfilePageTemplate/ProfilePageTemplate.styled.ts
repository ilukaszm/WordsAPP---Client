import styled from 'styled-components';

import { Checkbox, Heading, Input, Button } from 'components';

export const StyledWrapper = styled.div`
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
`;

export const InnerWrapper = styled.div`
  margin-bottom: 24px;
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
  margin-bottom: 36px;
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
