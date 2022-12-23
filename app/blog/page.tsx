import { BlogPosts } from '@components/BlogPosts/BlogPosts';
import { BlogPostsClientWrapper } from '@components/BlogPostsClientWrapper/BlogPostsClientWrapper';

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