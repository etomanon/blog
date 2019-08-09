import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export const Category = styled.div<SpaceProps>`
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  ${space};
`;
