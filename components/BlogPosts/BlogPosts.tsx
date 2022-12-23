import styles from '@components/BlogPosts/BlogPosts.module.scss';
import { BlogCard } from '@components/BlogCard/BlogCard';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

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

  return (
    <div className={styles.postsWrapper}>
      {posts.map((post) => {
        const { slug, frontmatter } = post;
        const { bannerImage, title, date } = frontmatter;

        return (
          <Link key={slug} href={`/blog/${slug}`}>
            <BlogCard bannerImage={bannerImage} title={title} date={date} />
          </Link>
        );
      })}
    </div>
  );
};

export { BlogPosts };