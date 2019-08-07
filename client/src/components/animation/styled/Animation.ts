import styled from 'styled-components';

interface FadeProps {
  state: string
}

export const FadeIn = styled.div<FadeProps>`
  width: 100%;
  transition: ease-in 0.2s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  transform: ${({ state }) => (state === "entered" ? "translate(0, 0)" : `translate(0, -2rem)`)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`