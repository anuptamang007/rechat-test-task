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
      100: '#4e1fe8',
      200: '#3e1ac9',
      300: '#2e169a',
      400: '#1e126b',
    },
    secondary: {
      100: '#b7b2b2',
      200: '#a6a1a1',
      300: '#959090',
      400: '#848080',
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
