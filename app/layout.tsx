import styles from '@app/layout.module.scss';
import { GlobalHeader } from '@components/GlobalHeader/GlobalHeader';
import { GlobalFooter } from '@components/GlobalFooter/GlobalFooter';
import { Inter } from '@next/font/google';
import '@styles/globals.scss';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={inter.className}>
    <head />
    <body className={`${styles.bodyDark}`}>
      <GlobalHeader />
      <div className={styles.globalWrapper}>
        <main className={styles.childrenWrapper}>
          {children}
        </main>
        <GlobalFooter />
      </div>
    </body>
  </html>
);

export default RootLayout;