import styles from '@components/GlobalFooter/GlobalFooter.module.scss';
import { Tooltip } from '@components/Tooltip/Tooltip';
import { AiOutlineMail } from 'react-icons/ai';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const GlobalFooter = () => {
  return (
    <footer className={styles.globalFooter}>
      <ul className={styles.siteLinks}>
        <li>
          <Tooltip text="View this website code" direction="top">
            <a href="https://github.com/devejlee/portfolio" target="_blank" rel="noopener noreferrer" className="hover-underline-animation" aria-label="Link to source code">Source Code</a>
          </Tooltip>
        </li>
      </ul>
      <p>Contact Me</p>
      <ul className={styles.socialLinks}>
        <li>
          <a href="mailto:develijahlee@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="My email">
            <AiOutlineMail className={styles.emailIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elijah-lee-9397a2188/" target="_blank" rel="noopener noreferrer" aria-label="My LinkedIn Profile">
            <SiLinkedin className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://github.com/devejlee" target="_blank" rel="noopener noreferrer" aria-label="My Github Profile">
            <SiGithub className={styles.icon} />
          </a>
        </li>
      </ul>
      <small>Copyright © Elijah Lee</small>
    </footer>
  );
};

export { GlobalFooter };