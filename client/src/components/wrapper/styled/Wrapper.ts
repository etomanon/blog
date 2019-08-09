import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export const WrapperRouter = styled.main<SpaceProps>`
  max-width: 85em;
  width: 100%;
  flex: 1;
  ${space}
`;

export const WrapperApp = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
