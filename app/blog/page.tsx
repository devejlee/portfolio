import { BlogPosts } from '@components/BlogPosts/BlogPosts';
import { BlogPostsClientWrapper } from '@components/BlogPostsClientWrapper/BlogPostsClientWrapper';

export const metadata = {
  title: 'Elijah Lee\'s Portfolio | Blog',
  description: 'Blog of Frontend Developer Elijah Lee',
};

const BlogPage = () => {
  return (
    <section>
      <BlogPostsClientWrapper>
        <BlogPosts />
      </BlogPostsClientWrapper>
    </section>
  );
};

export default BlogPage;