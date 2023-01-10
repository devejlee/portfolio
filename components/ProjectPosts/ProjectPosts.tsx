import styles from '@components/ProjectPosts/ProjectPosts.module.scss';
import { ProjectCard } from '@components/ProjectCard/ProjectCard';
import { projects } from '@data/index';

const ProjectPosts = () => {
  return (
    <div className={styles.cardsWrapper}>
      {projects.map((project) => {
        return (
          <ProjectCard key={project.title} year={project.year} title={project.title} body={project.body} demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
        );
      })}
    </div>
  );
};

export { ProjectPosts };