import { DefaultHeadTags } from '@components/DefaultHeadTags/DefaultHeadTags';

const Head = () => (
  <>
    <title>Elijah Lee&apos;s Portfolio | Home</title>
    <meta name="description" content="Frontend Developer porfolio of Elijah Lee" />
    <meta property="og:url" content="https://devejlee-portfolio.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Elijah Lee&apos;s Portfolio | Home"
    />
    <meta
      property="og:description"
      content="Home of Frontend Developer Elijah Lee"
    />
    <meta property="og:image" content="https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" />
    <meta property='twitter:title' content="Elijah Lee&apos;s Portfolio | Home" />
    <meta property='twitter:image' content="https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" />
    <meta name="twitter:card" content="Home of Frontend Developer Elijah Lee" />
    <DefaultHeadTags />
  </>
);

export default Head;
