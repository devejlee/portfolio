---
title: "How to add Google Analytics to Nextjs 13"
author: "Elijah Lee"
date: "January 15, 2023"
bannerImage: "nextjs-black"
alt: "Nextjs"
tags:
    - tutorial
---

### Configure Google Analytics

First, [set up Google Analytics for your website](https://support.google.com/analytics/answer/9304153?hl=en#zippy=%2Cweb)

### Create Google Analytics Helper Functions

Add `pageView` and `event` functions in a `utils` folder. We will only use the `pageView` function in this tutorial.

```
// tracks visited page
export const pageView = (url: string) => {
  window.gtag('config', 'G-XXXXXXXXXX', {
   page_path: url
  });
};

// handles custom events we want to track
export const event = ({action, category, label, value}: any) => {
  window.gtag('event', action, {
   event_category: category,
   event_label: label,
   value: value
 });
};
```

If you are using TypeScript, you may see the following error:

`Property 'gtag' does not exist on type 'Window & typeof globalThis'.`

To resolve it, you can create a `global.d.ts` file in your root directory with the following code:

```
declare global {
  interface Window {
    gtag: Function;
  }
}

export const Gtag = window.gtag;
```
Make sure to add `global.d.ts` in the `include` array of your `tsconfig.json` file.

```
{
  "compilerOptions": {
   ...
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "global.d.ts",
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```


### Create Analytics Component

Create an `Analytics` component with the following code:

```
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
      <Script strategy="afterInteractive" src={'https://www.googletagmanager.com/gtag/js?id=$G-XXXXXXXXXX'} />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-XXXXXXXXXX');
            `,
        }}
      />
    </>
  );
};

export { Analytics };
```
Replace `G-XXXXXXXXXX` with your custom Google Analytics tracking ID.

We add `'use client';` to the top of our file because we need our file to be a client component to use `useEffect`.

`usePathname` and `useSearchParams` track what page is visited. We also use the `Script` component from Nextjs to load third-party scripts. The `afterInteractive` option loads the script early but after some hydration on the page occurs.

### Use the Analytics Component in RootLayout

Add the `Analyltics` component in your `RootLayout`.

```
import '@styles/globals.scss';
import { Analytics } from '@components/Analytics/Analytics';
import { GlobalContent } from '@components/GlobalContent/GlobalContent';
import { Inter } from '@next/font/google';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode
}

// Fixes: Hydration failed because the initial UI does not match what was rendered on the server.
const DynamicContextProvider = dynamic(() => import('@components/ContextProvider/ContextProvider').then(mod => mod.ContextProvider), {
  ssr: false
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Analytics />
        <DynamicContextProvider>
          <GlobalContent>
            {children}
          </GlobalContent>
        </DynamicContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
```

You should now be able to see your pages being tracked real-time on Google Analytics!