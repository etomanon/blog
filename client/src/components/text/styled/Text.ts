import styled from 'styled-components';
import { display, DisplayProps, space, SpaceProps, fontSize, FontSizeProps, textAlign, TextAlignProps, color, ColorProps } from 'styled-system';


export const Text = styled.div<DisplayProps & SpaceProps & FontSizeProps & TextAlignProps & ColorProps>`
  display: inline-block;
  ${color};
  ${display};
  ${space};
  ${fontSize};
  ${textAlign};
`