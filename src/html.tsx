import * as React from 'react';
import { withPrefix } from 'gatsby';

interface Props {
  htmlAttributes: object;
  headComponents: [];
  bodyAttributes: object;
  preBodyComponents: [];
  body: string;
  postBodyComponents: [];
}

export default function HTML(props: Props) {
  return (
    <html lang="ja" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script async src="https://cdn.splitbee.io/sb.js" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
