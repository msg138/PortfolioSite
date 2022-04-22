import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

const GlobalMeta = (): ReactElement => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
    </Helmet>
  );
};

export default GlobalMeta;

