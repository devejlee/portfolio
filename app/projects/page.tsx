import { ProjectPosts } from '@components/ProjectPosts/ProjectPosts';

export const metadata = {
  title: 'Elijah Lee\'s Portfolio | Projects',
  description: 'Projects of Frontend Developer Elijah Lee',
};

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