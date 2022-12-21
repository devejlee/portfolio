import styles from '@app/blog/page.module.scss';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage = () => {
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
    <>
      <div>This is a blog page</div>
      <div>
        {posts.map((post) => {
          const { slug, frontmatter } = post;
          const { title, category, date, bannerImage } = frontmatter;

          return (
            <Link key={slug} href={`/blog/${slug}`} className={styles.post}>
              <div>{slug}</div>
              <div>{title}</div>
              <div>{date}</div>
              <div>{category}</div>
              <Image src={bannerImage} width={350} height={175} alt="post image" />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogPage;