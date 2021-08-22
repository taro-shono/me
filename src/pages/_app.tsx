import * as React from 'react';
import type { AppProps } from 'next/app';
import { Meta } from '../components/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
