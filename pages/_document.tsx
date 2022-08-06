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
        </Head>
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
