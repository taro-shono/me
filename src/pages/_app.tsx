import * as React from 'react';
import 'sanitize.css';
import type { AppProps } from 'next/app';
import { Meta } from '../components/Meta';
import { GlobalStyle } from '../styles/base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
