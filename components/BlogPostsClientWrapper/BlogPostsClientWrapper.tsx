'use client';
import { useFadeIn } from '@hooks/useFadeIn';
import { ReactNode } from 'react';

interface BlogPostsClientWrapperProps {
  children: ReactNode
}

const BlogPostsClientWrapper = ({ children }: BlogPostsClientWrapperProps) => {
  const fadeInTitle = useFadeIn<HTMLHeadingElement>(100);
  const fadeInIntro = useFadeIn<HTMLParagraphElement>(200);
  const fadeInChildren = useFadeIn<HTMLDivElement>(300);
  return (
    <>
      <h2 {...fadeInTitle} className="will-fade"><span className="text-gradient">Blog</span></h2>
      <p {...fadeInIntro} className="will-fade">Writings on development</p>
      <div {...fadeInChildren} className="will-fade">
        {children}
      </div>
    </>
  );
};

export { BlogPostsClientWrapper };