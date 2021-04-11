import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }
`;
