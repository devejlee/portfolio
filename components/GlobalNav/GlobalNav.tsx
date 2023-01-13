'use client';
import styles from '@components/GlobalNav/GlobalNav.module.scss';
import { ThemeContext } from '@store/theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const GlobalNav = () => {
  const { theme, toggle } = useContext(ThemeContext);

  const pathname = usePathname();

  const isCurrentPath = (path: string) => {
    if (path === pathname) {
      return styles.currentPathLink;
    }
  };

  return (
    <nav className={styles.globalNav}>
      <ul>
        <li>
          <Link href="/" className={isCurrentPath('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={isCurrentPath('/about')}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={isCurrentPath('/projects')}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" className={isCurrentPath('/blog')}>
            Blog
          </Link>
        </li>
      </ul>
      <button onClick={toggle} aria-label="Toggle light/dark theme">
        {theme === 'light' ? (
          <FiSun size={30} />
        ) : (
          <FiMoon size={30} />
        )}
      </button>
    </nav >
  );
};

export { GlobalNav };