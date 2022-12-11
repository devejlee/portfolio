"use client"
import styles from "@components/Intro/Intro.module.scss"
import github from "@public/images/icons/github.svg"
import linkedIn from "@public/images/icons/linkedin.svg"
import resume from "@public/images/icons/resume.svg"
import Image from 'next/image';
import { useFadeIn } from "@hooks/useFadeIn"


const Intro = () => {
  const fadeInTitle = useFadeIn<HTMLHeadingElement>(100);
  const fadeInIntro = useFadeIn<HTMLParagraphElement>(200);
  const fadeInSocial = useFadeIn<HTMLUListElement>(300);

  return (
    <section className={styles.wrapper} >
      <h2 {...fadeInTitle} className="will-fade">Hi! I&apos;m <span>Elijah</span></h2>
      <p {...fadeInIntro} className="will-fade">I am a frontend developer passionate about pushing myself to learn best practices to build <span>awesome</span> web applications</p>
      <ul {...fadeInSocial} className={`${styles.socialLinks} will-fade`}>
        <li>
          <a href="#" target="_blank"><Image src={resume} alt="Resume" />Resume</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elijah-lee-9397a2188/" target="_blank" rel="noopener noreferrer"><Image src={linkedIn} alt="LinkedIn" />LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/devejlee" target="_blank" rel="noopener noreferrer"><Image src={github} alt="Github" />Github</a>
        </li>
      </ul>
    </section>
  )
}

export { Intro }