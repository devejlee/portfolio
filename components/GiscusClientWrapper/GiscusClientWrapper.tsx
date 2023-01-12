'use client';
import Giscus from '@giscus/react';
import { ThemeContext } from '@store/theme';
import { useContext } from 'react';

const GiscusClientWrapper = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Giscus
      repo="devejlee/portfolio"
      repoId="R_kgDOIjePjQ"
      category="General"
      categoryId="DIC_kwDOIjePjc4CTUlz"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      theme={theme}
    />
  );
};

export { GiscusClientWrapper };