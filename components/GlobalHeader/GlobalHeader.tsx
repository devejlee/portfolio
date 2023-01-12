'use client';
import styles from '@components/GlobalHeader/GlobalHeader.module.scss';
import { GlobalNav } from '@components/GlobalNav/GlobalNav';
import { ThemeContext } from '@store/theme';
import { useContext } from 'react';

const GlobalHeader = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`${styles.header} ${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <div className={styles.gradientTop}></div>
      <GlobalNav />
    </header>
  );
};

export { GlobalHeader };