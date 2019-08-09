import styled from "styled-components";
import {
  space,
  SpaceProps,
  flexDirection,
  FlexDirectionProps
} from "styled-system";

export const HeaderWrapper = styled.header<SpaceProps & FlexDirectionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  ${space}
  ${flexDirection}
`;

export const Logo = styled.img`
  display: flex;
`;
