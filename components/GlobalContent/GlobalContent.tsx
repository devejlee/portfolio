'use client';
import styles from '@components/GlobalContent/GlobalContent.module.scss';
import { GlobalHeader } from '@components/GlobalHeader/GlobalHeader';
import { GlobalFooter } from '@components/GlobalFooter/GlobalFooter';
import { ThemeContext } from '@store/theme';
import { ReactNode, useContext } from 'react';

interface GlobalContentProps {
  children: ReactNode
}

const GlobalContent = ({ children }: GlobalContentProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <GlobalHeader />
      <div className={styles.globalWrapper}>
        <main className={styles.childrenWrapper}>
          {children}
        </main>
        <GlobalFooter />
      </div>
    </div>
  );
};

export { GlobalContent };