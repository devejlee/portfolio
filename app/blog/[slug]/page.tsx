import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export const generateStaticParams = async () => {
  // get list of all files from posts directory
  const files = fs.readdirSync('posts');

  // get slug from each post
  const posts = files.map((fileName) => ({
    slug: fileName.replace('.md', ''),
  }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

interface PageProps {
  params: { slug: string }
}

const Page = async ({ params }: PageProps) => {
  const fetchPostData = async (params: { slug: string }) => {
    const fileName = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      frontmatter,
      content,
    };
  };

  const data = await fetchPostData(params);
  const { frontmatter } = data;
  const { title, author } = frontmatter;

  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <div dangerouslySetInnerHTML={{ __html: md().render(data.content) }} />
    </div>
  );
};

export default Page;