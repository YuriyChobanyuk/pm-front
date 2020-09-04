import 'styled-components';
import { ThemeColors, ThemeConstants, ThemeFonts } from './types/theme-types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    fonts: ThemeFonts;
    constants: ThemeConstants;
  }
}
