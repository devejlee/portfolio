import fs from "fs";
import Link from 'next/link';

const BlogPage = () => {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");

  // Generate a path for each one
  const paths = files.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));

  return (
    <>
      <div>This is a blog page</div>
      <div>
        {paths.map((path) => {
          return (
            <Link key={path.slug} href={`/blog/${path.slug}`}>{path.slug}</Link>
          )
        })}
      </div>
    </>
  )
}

export default BlogPage