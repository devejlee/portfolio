import styles from '@components/BlogPosts/BlogPosts.module.scss';
import { BlogCard } from '@components/BlogCard/BlogCard';
import fs from 'fs';
import matter from 'gray-matter';

const BlogPosts = () => {
  // get list of all files from posts directory
  const files = fs.readdirSync('posts');

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  const sortedPosts = [...posts].sort(((a, b) => b.frontmatter.id - a.frontmatter.id));

  return (
    <div className={styles.postsWrapper}>
      {sortedPosts.map((post) => {
        const { slug, frontmatter } = post;
        const { title, date, bannerImage, alt } = frontmatter;

        return (
          <BlogCard key={slug} slug={slug} title={title} date={date} bannerImage={bannerImage} alt={alt} />
        );
      })}
    </div>
  );
};

export { BlogPosts };