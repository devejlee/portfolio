import "@styles/globals.scss"
import { ReactNode } from "react";

interface ProjectsLayoutProps {
  children: ReactNode
}

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => (
  <div>{children}</div>
);

export default ProjectsLayout