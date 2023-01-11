'use client';
import styles from '@components/GlobalContent/GlobalContent.module.scss';
import { GlobalFooter } from '@components/GlobalFooter/GlobalFooter';
import { ThemeContext } from '@store/theme';
import { ReactNode, useContext } from 'react';

interface GlobalContentProps {
  children: ReactNode
}

const GlobalContent = ({ children }: GlobalContentProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.globalWrapper} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}>
      <main className={styles.childrenWrapper}>
        {children}
      </main>
      <GlobalFooter />
    </div>
  );
};

export { GlobalContent };