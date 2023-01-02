'use client';
import { useEffect, useState } from 'react';

interface ViewCounterProps {
  blogPage: boolean
  slug: string
}

const ViewCounter = ({ blogPage, slug }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    if (blogPage) {
      const getView = async () => {
        const response = await fetch(`/api/views/?slug=${slug}`, {
          method: 'GET',
        });
        const data = await response.json();
        setViewCount(data.total);
      };

      getView();
      return;
    }

    const registerView = async () => {
      const response = await fetch(`/api/views/?slug=${slug}`, {
        method: 'POST',
      });
      const data = await response.json();
      setViewCount(data.total);
    };

    registerView();
  }, [blogPage, slug]);

  return (
    <>
      views: {viewCount}
    </>
  );
};

export { ViewCounter };