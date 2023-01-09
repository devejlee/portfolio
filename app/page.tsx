import styles from '@app/page.module.scss';
import { CloudinaryImage } from '@components/CloudinaryImage/CloudinaryImage';
import { IoDocument } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Page = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div>
          <h2>Hi! I&apos;m <span className="text-gradient">Elijah</span></h2>
          <p>Welcome to my website! 👨‍💻</p>
          <p>I am a frontend developer passionate about pushing myself to learn best practices to build <span className="text-gradient">awesome</span> web applications</p>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#" target="_blank">
                <IoDocument className={styles.icon} />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elijah-lee-9397a2188/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className={styles.icon} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/devejlee" target="_blank" rel="noopener noreferrer">
                <SiGithub className={styles.icon} />
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.laptop}>
          <CloudinaryImage id="laptop-black" alt="laptop" fill />
        </div>
      </section>
    </>
  );
};

export default Page;