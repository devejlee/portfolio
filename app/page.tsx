import styles from '@app/page.module.scss';
import { IoDocument } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Page = () => {

  return (
    <section className={styles.wrapper} >
      <h2>Hi! I&apos;m <span className="text-gradient">Elijah</span></h2>
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
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minus neque vitae voluptatibus et architecto unde optio expedita dolores ratione, nisi molestias quia veritatis excepturi tenetur fugiat nam harum quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero iure ab laboriosam suscipit! A sit exercitationem dolorum nisi, maxime modi? Distinctio, perspiciatis animi! Possimus corrupti ullam accusamus laborum libero.</p>
    </section>
  );
};

export default Page;