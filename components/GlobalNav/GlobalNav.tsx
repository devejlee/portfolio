import styles from '@components/GlobalNav/GlobalNav.module.scss'
import Link from "next/link";

const GlobalNav = () => {
  return (
    <nav className={styles.globalNav}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { GlobalNav }