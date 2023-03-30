import styles from '@app/page.module.scss';
import { BlogPosts } from '@components/BlogPosts/BlogPosts';
import { CloudinaryImage } from '@components/CloudinaryImage/CloudinaryImage';
import { ProjectPosts } from '@components/ProjectPosts/ProjectPosts';
import { IoDocument } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const metadata = {
  title: 'Elijah Lee\'s Portfolio | Home',
  description: 'Portfolio of Frontend Developer Elijah Lee',
};

const Page = () => {
  return (
    <>
      <section className={styles.intro}>
        <div>
          <h2>Hi! I&apos;m <span className="text-gradient">Elijah</span></h2>
          <p>Welcome to my website! 👨‍💻</p>
          <p>I am a frontend developer passionate about pushing myself to learn best practices to build <span className="text-gradient">awesome</span> web applications</p>
          <ul className={styles.socialLinks}>
            <li>
              <a href="/ElijahLee_CV_2023.pdf" target="_blank" aria-label="My resume">
                <IoDocument className={styles.icon} />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elijah-lee-9397a2188/" target="_blank" rel="noopener noreferrer" aria-label="My LinkedIn">
                <SiLinkedin className={styles.icon} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/devejlee" target="_blank" rel="noopener noreferrer" aria-label="My Github">
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
      <section className={styles.latestProjects}>
        <h3><span className="text-gradient">Latest Projects</span></h3>
        <ProjectPosts />
      </section>
      <section className={styles.latestPosts}>
        <h3><span className="text-gradient">Latest Posts</span></h3>
        <BlogPosts />
      </section>
    </>
  );
};

export default Page;