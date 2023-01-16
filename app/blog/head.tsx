import { DefaultHeadTags } from '@components/DefaultHeadTags/DefaultHeadTags';

const BlogHead = () => (
  <>
    <title>Elijah Lee&apos;s Portfolio | Blog</title>
    <meta name="description" content="Blog of Frontend Developer Elijah Lee" />
    <meta property="og:url" content="https://devejlee-portfolio.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Elijah Lee&apos;s Portfolio | Blog"
    />
    <meta
      property="og:description"
      content="Blog of Frontend Developer Elijah Lee"
    />
    <meta property="og:image" content="https://res.cloudinary.com/drcrnibbz/image/upload/v1673840807/social-media.png" />
    <meta property='twitter:title' content="Elijah Lee&apos;s Portfolio | Blog" />
    <meta property='twitter:image' content="https://res.cloudinary.com/drcrnibbz/image/upload/v1673840807/social-media.png" />
    <meta name="twitter:card" content="Blog of Frontend Developer Elijah Lee" />
    <DefaultHeadTags />
  </>
);

export default BlogHead;
