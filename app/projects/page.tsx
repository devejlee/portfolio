import { ProjectPosts } from '@components/ProjectPosts/ProjectPosts';

const ProjectsPage = () => {
  return (
    <section>
      <h2><span className="text-gradient">Projects</span></h2>
      <p>Things I made for fun</p>
      <ProjectPosts />
    </section>
  );
};

export default ProjectsPage;