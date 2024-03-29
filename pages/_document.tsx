import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Start of HubSpot Embed Code --> */}
          <script
            type='text/javascript'
            id='hs-script-loader'
            async
            defer
            src='//js-eu1.hs-scripts.com/25523533.js'
          />
          {/* <!-- End of HubSpot Embed Code --> */}
          <title>Hnatejko page</title>
          <meta name="description" content="Hnatejko page"/>
          <meta name="keywords" content="Hnatejko"/>
          <meta name="author" content="M. Hnatejko"/>
        </Head>
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
