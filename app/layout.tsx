import '@styles/globals.scss';
import { Analytics } from '@components/Analytics/Analytics';
import { GlobalContent } from '@components/GlobalContent/GlobalContent';
import { ContextProvider } from '@components/ContextProvider/ContextProvider';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

export const metadata = {
  openGraph: {
    url: 'https://devejlee-portfolio.vercel.app/',
    siteName: 'Portfolio of Frontend Developer Elijah Lee',
    images: [
      {
        url: 'https://res.cloudinary.com/drcrnibbz/image/upload/v1673840807/social-media.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'Learn more about Frontend Developer Elijah Lee',
    title: 'Frontend Developer Elijah Lee',
    description: 'Portfolio of Frontend Developer Elijah Lee',
    images: ['https://res.cloudinary.com/drcrnibbz/image/upload/v1673840807/social-media.png'],
  },
};

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