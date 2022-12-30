'use client';
import Giscus from '@giscus/react';

const GiscusClientWrapper = () => {
  return (
    <Giscus
      repo="devejlee/portfolio"
      repoId="R_kgDOIjePjQ"
      category="General"
      categoryId="DIC_kwDOIjePjc4CTUlz"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      theme="dark"
    />
  );
};

export { GiscusClientWrapper };