import styled from 'styled-components';

import { Button } from 'components';

export const StyledTextarea = styled.textarea`
  resize: none;
  padding: 20px;
  width: 100%;
  height: 150px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.sizes.M};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.bolds.light};
  color: white;
  margin-bottom: 24px;

  ::placeholder {
    color: white;
  }

  :focus {
    outline: 0;
  }

  ${({ theme: { devices } }) => devices.tablet} {
    height: 300px;
  }
`;
export const GameButton = styled(Button)`
  margin-bottom: 16px;
  margin-left: 5px;
  width: 45%;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 50%;
    margin-left: 0;
  }
`;

export const StyledGameButtonsWrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto 24px;

  ${({ theme: { devices } }) => devices.tablet} {
    height: 300px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;
