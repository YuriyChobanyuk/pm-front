import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#2c3e50',
    primaryLighten: '#354b60',
    primaryDarken: '#202e3c',
    secondary: '#18bc9c',
    secondaryLighten: '#0fa395',
    secondaryDarken: '#0a7f6c',
    success: '#47B881',
    info: '#217dbb',
    warning: '#f39c12',
    danger: '#e74c3c',
    light: '#f8f9fa',
    dark: '#aaaaaa',
    accent: '#EAB543',
    lightgrey: '#eaedf1',
    grey: '#dddddd',
    transparent: '#00000000',
    lightcyan: '#e6e8ec',
    darken: '#858585',
  },
  fonts: {
    content: 'Lato, "Droid Sans", "Helvetica Neue", sans-serif',
    title: 'Oxygen, "Droid Sans", "Helvetica Neue", sans-serif',
  },
  constants: {
    TOP_NAV_HEIGHT: '5rem',
    DARK_COLORS: ['primary', 'danger', 'warning', 'info'],
  },
};

export default defaultTheme;
