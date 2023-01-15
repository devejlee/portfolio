'use client';
import * as gtag from '@utils/index';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const newPageViewPath = pathname + searchParams.toString();
      gtag.pageView(newPageViewPath);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script strategy="afterInteractive" src={'https://www.googletagmanager.com/gtag/js?id=$G-ZEPKB6XPR7'} />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-ZEPKB6XPR7');
            `,
        }}
      />
    </>
  );
};

export { Analytics };