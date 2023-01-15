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