import styles from '@app/projects/page.module.scss';
import { ProjectCard } from '@components/ProjectCard/ProjectCard';
import { projects } from '@data/index';

const ProjectsPage = () => {
  return (
    <section>
      <h2><span className="text-gradient">Projects</span></h2>
      <p>Things I made for fun</p>
      <div className={styles.cardsWrapper}>
        {projects.map((project) => {
          return (
            <ProjectCard key={project.title} year={project.year} title={project.title} body={project.body} demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;