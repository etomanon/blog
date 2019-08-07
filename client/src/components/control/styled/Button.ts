import styled from 'styled-components';
import {width, WidthProps} from 'styled-system';

export const Button = styled.button<WidthProps>`
  padding: 1rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  text-transform: uppercase;
  letter-spacing: 2px;
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all .2s ease-in;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:active {
    border-style: solid;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: #fff;
  }
  ${width}
`