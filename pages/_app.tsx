import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';

export const fn = (x: number, _y: any) => x * 1;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <Script
        type='text/javascript'
        src='//js-eu1.hsforms.net/forms/shell.js'
      />
      <Script
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
      />
    </>
  );
}

export default MyApp;
