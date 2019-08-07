import styled from 'styled-components';
import { Delete } from "styled-icons/material/Delete";

interface ShowProps {
  show: boolean;
}

export const PostDelete = styled(Delete) <ShowProps>`
  position: absolute;
  right: 0;
  top: 1rem;
  color: ${({ theme }) => theme.colors.greyLight};
  height: 3rem;
  opacity: ${({ show }) => show ? 1 : 0};
  transition: opacity .2s ease-in, color .2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }
  @media (hover: none) {
    color: ${({ theme }) => theme.colors.error};
  }
`

export const PostLine = styled.div<ShowProps>`
  width: ${({ show }) => show ? "100%" : "0"};
  left: 0;
  bottom: -4px;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  transition: .2s ease-in width;
`

export const PostWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.4rem;
  margin-bottom: 4px;
  width: 100%;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    
  }
  &:hover {
    ${PostDelete} {
      opacity: 1
    }
    ${PostLine} {
      width: 100%;
    }
    
  }
`