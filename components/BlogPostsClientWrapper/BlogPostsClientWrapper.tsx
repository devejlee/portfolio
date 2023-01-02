import { ReactNode } from 'react';

interface BlogPostsClientWrapperProps {
  children: ReactNode
}

const BlogPostsClientWrapper = ({ children }: BlogPostsClientWrapperProps) => {
  return (
    <>
      <h2><span className="text-gradient">Blog</span></h2>
      <p>Writings on development</p>
      <div>
        {children}
      </div>
    </>
  );
};

export { BlogPostsClientWrapper };