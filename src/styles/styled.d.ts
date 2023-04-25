import 'styled-components/macro';

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    colors: {
      light: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      dark: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      primary: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      secondary: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      danger: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
    };

    mediaQuery: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
