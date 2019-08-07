import styled, { css } from 'styled-components';

const baseStyles = css` 
padding: 1rem 1.5rem;
background: #fff;
width: 100%;
border: 2px solid transparent;
outline: none;
border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
border-radius: 4px;
&:focus {
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
}`

export const Input = styled.input`
 ${baseStyles}
`

export const TextArea = styled.textarea`
 ${baseStyles}
 resize: none;
 padding: 1rem;
 border: 2px solid ${({ theme }) => theme.colors.greyLight};
 &:focus {
  border: 2px solid ${({ theme }) => theme.colors.primary};
}
 `