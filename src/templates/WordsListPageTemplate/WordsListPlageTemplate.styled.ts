import styled from 'styled-components';

import { Paragraph, AddButton, Input } from 'components';
import searchIcon from 'assets/icons/search.svg';

export const ColumnsTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${({ theme: { devices } }) => devices.tabletL} {
    grid-template-columns: 0.333fr 0.333fr;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bolds.bold};
`;

export const StyledAddButton = styled(AddButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const StyledInput = styled(Input)`
  background-image: url(${searchIcon});
  ${({ theme: { devices } }) => devices.tabletL} {
    width: 25%;
  }
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: right;
`;
