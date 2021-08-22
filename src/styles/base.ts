import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    font-family: system-ui, sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    body {
      background: #15202b;
      color: #fff;
    }
    a {
      color: #46a2ec;
    }
  }
`;
