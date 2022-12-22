import styles from '@components/ProjectCard/ProjectCard.module.scss';
import { HiExternalLink } from 'react-icons/hi';

interface ProjectCardProps {
  year: string
  title: string
  body: string
  demoUrl: string
  githubUrl: string
}

const ProjectCard = ({ year, title, body, demoUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <time className="text-gradient">{year}</time>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={styles.cardLinks}>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <span>Demo</span>
          <HiExternalLink />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <span>Github</span>
          <HiExternalLink />
        </a>
      </div>
    </div>
  );
};

export { ProjectCard };