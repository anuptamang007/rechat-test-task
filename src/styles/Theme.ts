import { DefaultTheme } from 'styled-components/macro';

const AppTheme: DefaultTheme = {
  colors: {
    light: {
      100: '#ffffff',
      200: '#eeeeee',
      300: '#dddddd',
      400: '#cccccc',
    },
    dark: {
      100: '#000000',
      200: '#111111',
      300: '#222222',
      400: '#333333',
    },
    primary: {
      100: '#A2CEED',
      200: '#3e1ac9',
      300: '#0e619c',
      400: '#1775B9',
    },
    secondary: {
      100: '#b7b2b2',
      200: '#a6a1a1',
      300: '#959090',
      400: '#E9EAEB',
    },
    danger: {
      100: '#f67676',
      200: '#f67676',
      300: '#f67676',
      400: '#f67676',
    },
  },
  mediaQuery: {
    xs: '@media (min-width: 320px)',
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1200px)',
  },
};

export { AppTheme };
