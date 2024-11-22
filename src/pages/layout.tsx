import * as React from 'react';
import 'sanitize.css';
import StyledComponentsRegistry from 'src/libs/styled-registry';
import { GlobalStyle } from '../styles/base';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}

export default MyApp;
