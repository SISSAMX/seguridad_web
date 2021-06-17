import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';


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