import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing:border-box
  }

  *,
  ::after,
  ::before {
  box-sizing:inherit
  }

  body {  
    font-size: 16px;
    line-height: 1.3;
    font-weight: 40;
    font-family: Roboto, sans-serif;
  }

  a {
     color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.dark};
    margin: 0 0 20px;
  }

  p {
    margin: 0 0 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
