import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Script
        type='text/javascript'
        src='//js-eu1.hsforms.net/forms/shell.js'
      /> */}
      {/* <Script
        id='hsscript'
        dangerouslySetInnerHTML={{
          __html: `
            hbspt.forms.create({
              region: 'eu1',
              portalId: '25523533',
              formId: '77af856f-eaae-4f68-8484-c6d7661d68f7',
            })
            `,
        }}
      /> */}
      {/* <Script
        type='text/javascript'
        id='hs-script-loader'
        async
        defer
        src='//js-eu1.hs-scripts.com/25527733.js'
      /> */}
    </>
  );
}

export default MyApp;
