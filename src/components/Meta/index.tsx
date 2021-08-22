import * as React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  url?: string;
}

export const Meta: React.FC<Props> = (props) => {
  const {
    title = 'hanagejet',
    description = 'This is hanagejet',
    image = 'https://hanagejet.com/img/ogp.png',
    url = 'https://hanagejet.com',
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@hanagejet" />
    </Head>
  );
};
