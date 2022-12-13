import styles from "@components/GlobalFooter/GlobalFooter.module.scss"
import email from "@public/images/icons/email.svg"
import github from "@public/images/icons/github.svg"
import linkedIn from "@public/images/icons/linkedin.svg"
import Image from 'next/image';

const GlobalFooter = () => {
  return (
    <footer className={styles.globalFooter}>
      <ul className={styles.siteLinks}>
        <li>
          <a href="https://github.com/devejlee/portfolio" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">Source Code</a>
        </li>
      </ul>
      <p>Contact Me</p>
      <ul className={styles.socialLinks}>
        <li>
          <a href="mailto:develijahlee@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src={email} alt="LinkedIn" width={28} height={28} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elijah-lee-9397a2188/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedIn} alt="LinkedIn" width={25} height={25} />
          </a>
        </li>
        <li>
          <a href="https://github.com/devejlee" target="_blank" rel="noopener noreferrer">
            <Image src={github} alt="Github" width={25} height={25} />
          </a>
        </li>
      </ul>
      <small>Copyright © Elijah Lee</small>
    </footer>
  );
};

export { GlobalFooter }