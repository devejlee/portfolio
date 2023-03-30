import '@styles/globals.scss';
import { Analytics } from '@components/Analytics/Analytics';
import { GlobalContent } from '@components/GlobalContent/GlobalContent';
import { ContextProvider } from '@components/ContextProvider/ContextProvider';
import { Inter } from '@next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Analytics />
        <ContextProvider>
          <GlobalContent>
            {children}
          </GlobalContent>
        </ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;