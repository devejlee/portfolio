'use client';
import { useEffect, useState } from 'react';

interface ViewCounterProps {
  blogPage: boolean
  slug: string
}

const ViewCounter = ({ blogPage, slug }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const registerView = async () => {
      const response = await fetch(`/api/views/?slug=${slug}`, {
        method: 'POST',
      });
      const data = await response.json();
      console.log('data', data);
      setViewCount(data.total);
    };

    registerView();
  }, [slug]);

  return (
    <>
      views: {viewCount}
    </>
  );
};

export { ViewCounter };