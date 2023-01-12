import '@styles/globals.scss';
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
      <head />
      <body>
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