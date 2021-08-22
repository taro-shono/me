import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

export default class MyDocument extends Document<Props> {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.splitbee.io/sb.js" />
        </body>
      </Html>
    );
  }
}
