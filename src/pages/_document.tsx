import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import FavIcon from "@assets/images/favicon.png";


class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content="#0d386c"
          />
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
          {/*  Global site tag (gtag.js) - Google Analytics */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;