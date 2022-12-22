'use client';
import styles from '@app/page.module.scss';
import { useFadeIn } from '@hooks/useFadeIn';
import { IoDocument } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Page = () => {
  const fadeInTitle = useFadeIn<HTMLHeadingElement>(100);
  const fadeInIntro = useFadeIn<HTMLParagraphElement>(200);
  const fadeInSocial = useFadeIn<HTMLUListElement>(300);
  const fadeInTest = useFadeIn<HTMLParagraphElement>(400);

  return (
    <section className={styles.wrapper} >
      <h2 {...fadeInTitle} className="will-fade">Hi! I&apos;m <span className="text-gradient">Elijah</span></h2>
      <p {...fadeInIntro} className="will-fade">I am a frontend developer passionate about pushing myself to learn best practices to build <span className="text-gradient">awesome</span> web applications</p>
      <ul {...fadeInSocial} className={`${styles.socialLinks} will-fade`}>
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
      <p {...fadeInTest} className="will-fade">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minus neque vitae voluptatibus et architecto unde optio expedita dolores ratione, nisi molestias quia veritatis excepturi tenetur fugiat nam harum quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero iure ab laboriosam suscipit! A sit exercitationem dolorum nisi, maxime modi? Distinctio, perspiciatis animi! Possimus corrupti ullam accusamus laborum libero.</p>
    </section>
  );
};

export default Page;