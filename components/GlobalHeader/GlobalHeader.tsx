import styles from '@components/GlobalHeader/GlobalHeader.module.scss';
import { GlobalNav } from '@components/GlobalNav/GlobalNav';

const GlobalHeader = () => {
  return (
    <header className={styles.header}>
      <GlobalNav />
    </header>
  );
};

export { GlobalHeader };