export interface ThemeColors {
  primary: string;
  primaryLighten: string;
  primaryDarken: string;
  secondaryLighten: string;
  secondaryDarken: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
  accent: string;
  lightgrey: string;
  grey: string;
  transparent: string;
}

export type ColorVariants = keyof ThemeColors;

export interface ThemeConstants {
  TOP_NAV_HEIGHT: string;
  DARK_COLORS: ColorVariants[];
}

export interface ThemeFonts {
  content: string;
  title: string;
}
