import styled, { css } from "styled-components";
import {
  display,
  DisplayProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  textAlign,
  TextAlignProps,
  color,
  ColorProps,
  fontWeight,
  FontWeightProps,
  width,
  WidthProps
} from "styled-system";

interface TextProps {
  clickable?: boolean;
}

const clickable = css`
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

// eslint-disable-next-line
export const Text = styled.div<
  TextProps &
    DisplayProps &
    SpaceProps &
    FontSizeProps &
    TextAlignProps &
    ColorProps &
    FontWeightProps &
    WidthProps
>`
  display: inline-block;
  ${color};
  ${display};
  ${space};
  ${fontSize};
  ${textAlign};
  ${fontWeight};
  ${width};
  ${props => props.clickable && clickable};
`;
