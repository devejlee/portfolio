import styles from "@components/Card/Card.module.scss"
import { HiExternalLink } from "react-icons/hi";

interface CardProps {
  year: string
  title: string
  body: string
  demoUrl: string
  githubUrl: string
}

const Card = ({ year, title, body, demoUrl, githubUrl }: CardProps) => {
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
}

export { Card }