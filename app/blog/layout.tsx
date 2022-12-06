import '@styles/globals.scss'
import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => (
  <div>{children}</div>
);

export default BlogLayout