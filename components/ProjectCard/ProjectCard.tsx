'use client';
import styles from '@components/ProjectCard/ProjectCard.module.scss';
import { ThemeContext } from '@store/theme';
import { useContext } from 'react';
import { HiExternalLink } from 'react-icons/hi';

interface ProjectCardProps {
  year: string
  title: string
  body: string
  demoUrl: string
  githubUrl: string
}

const ProjectCard = ({ year, title, body, demoUrl, githubUrl }: ProjectCardProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.card} ${theme === 'light' ? styles.cardLight : styles.cardDark}`}>
      <div>
        <time className="text-gradient">{year}</time>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={`${styles.cardLinks} ${theme === 'light' ? styles.cardLinksLight : styles.cardLinksDark}`}>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label="demo link">
          <span>Demo</span>
          <HiExternalLink />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github link">
          <span>Github</span>
          <HiExternalLink />
        </a>
      </div>
    </div>
  );
};

export { ProjectCard };