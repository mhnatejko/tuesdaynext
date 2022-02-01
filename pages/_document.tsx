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
        <body>
          <Main />
          <NextScript />
           <script type="text/javascript" src="//js-eu1.hsforms.net/forms/shell.js"></script>
            <script>
              hbspt.forms.create({
              region: "eu1",
              portalId: "25523533",
              formId: "77af856f-eaae-4f68-8484-c6d7661d68f7"
            });
            </script>
        </body>
      </Html>
    );
  }
}
