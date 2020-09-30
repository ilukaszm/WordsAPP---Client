import styled from 'styled-components';
import watchIcon from 'assets/icons/watch.svg';

const StyledInput = styled.div<{
  error?: boolean;
  type?: string;
}>`
  width: 100%;
  position: relative;
  > input {
    padding-right: ${({ type }) => type === 'password' && '40px'};
    border: none;
    border-bottom: 1px solid
      ${({ theme, error }) => (error ? theme.colors.secondaryRed : theme.colors.black)};
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.bolds.light};
    font-size: ${({ theme }) => theme.sizes.M};
    background: none;
  }
  > input:not([type='button']) {
    width: 100%;
  }
  > input[type='button'] {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
  > input:focus {
    outline: none;
  }
  > label {
    position: absolute;
    top: 3px;
    left: 0;
    transition: 0.3s ease-in-out;
    font-size: ${({ theme }) => theme.sizes.S};
    font-weight: ${({ theme }) => theme.bolds.light};
  }
  > input:focus + label {
    top: -22px;
    font-size: ${({ theme }) => theme.sizes.S};
    font-weight: ${({ theme }) => theme.bolds.light};
  }
  > input:not(:placeholder-shown) + label {
    top: -22px;
    font-size: ${({ theme }) => theme.sizes.S};
    font-weight: ${({ theme }) => theme.bolds.light};
  }
  > p {
    display: block;
    margin: 5px 2px 48px;
    font-size: ${({ theme }) => theme.sizes.S};
    color: ${({ theme }) => theme.colors.secondaryRed};
  }
  > input[type='button'] {
    cursor: pointer;
    width: 23px;
    height: 12px;
    border: none;
    background: none;
    background-image: url(${watchIcon});
    background-repeat: no-repeat;
    background-position: center;
    :focus {
      outline: none;
    }
  }
`;

export default StyledInput;
