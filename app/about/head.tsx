import { DefaultHeadTags } from '@components/DefaultHeadTags/DefaultHeadTags';

const AboutHead = () => (
  <>
    <title>Elijah Lee&apos;s Portfolio | About</title>
    <meta name="description" content="About Frontend Developer Elijah Lee" />
    <meta property="og:url" content="https://devejlee-portfolio.vercel.app/about" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Elijah Lee&apos;s Portfolio | About"
    />
    <meta
      property="og:description"
      content="About Frontend Developer Elijah Lee"
    />
    <meta property="og:image" content="/social-media.png" />
    <meta name="twitter:card" content="About Frontend Developer Elijah Lee" />
    <DefaultHeadTags />
  </>
);

export default AboutHead;
