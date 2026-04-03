import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { UtmCapture } from '@/components/UtmCapture';

export const metadata: Metadata = {
  title: 'Forja Fit Funnel',
  description: 'Funil low ticket para Forja Fit com quiz, resultado, oferta e bridge.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="facebook-domain-verification"
          content="55067xqgpk30z9yuoibbvhvlhknuwk"
        />
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBPX78JN');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBPX78JN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <UtmCapture />
        {children}
      </body>
    </html>
  );
}
