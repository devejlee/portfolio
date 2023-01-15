'use client';
import styles from '@components/BlogContent/BlogContent.module.scss';
import { ThemeContext } from '@store/theme';
import { ReactNode, useContext } from 'react';

interface BlogContentProps {
  children: ReactNode
}

const BlogContent = ({ children }: BlogContentProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.content} ${theme === 'light' ? styles.contentLight : styles.contentDark}`}>
      {children}
    </div>
  );
};

export { BlogContent };