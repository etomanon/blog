import styled from "styled-components";
import {
  display,
  DisplayProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps
} from "styled-system";

// eslint-disable-next-line
export const TextHeader = styled.div<
  DisplayProps & SpaceProps & TextAlignProps
>`
  display: inline-block;
  font-size: 2.2rem;
  ${display}
  ${space};
  ${textAlign};
`;
