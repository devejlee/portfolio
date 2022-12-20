import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';

export const generateStaticParams = async () => {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));

  return paths.map((path) => ({
    slug: path.slug,
  }));
}

const fetchData = async (params: { slug: string }) => {
  const fileName = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    data: {
      frontmatter,
      content,
    },
  };
}

interface PageProps {
  params?: any
  children?: React.ReactNode
}

const Page = async ({ params }: PageProps) => {
  const data = await fetchData(params);

  return (
    <div className="space-y-4">
      <div dangerouslySetInnerHTML={{ __html: md().render(data.data.content) }} />
    </div>
  );
}

export default Page