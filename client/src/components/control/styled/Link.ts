import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)<SpaceProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${space}
`;
