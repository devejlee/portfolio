import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export const generateStaticParams = async () => {
  // get list of all files from our posts directory
  const files = fs.readdirSync('posts');

  // generate a path for each one
  const paths = files.map((fileName) => ({
    slug: fileName.replace('.md', ''),
  }));

  return paths.map((path) => ({
    slug: path.slug,
  }));
};

const fetchData = async (params: { slug: string }) => {
  const fileName = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    frontmatter,
    content,
  };
};

interface PageProps {
  params: { slug: string }
}

const Page = async ({ params }: PageProps) => {
  const data = await fetchData(params);
  const { frontmatter } = data;

  return (
    <div>
      <div>{frontmatter.title}</div>
      <div>{frontmatter.author}</div>
      <div dangerouslySetInnerHTML={{ __html: md().render(data.content) }} />
    </div>
  );
};

export default Page;