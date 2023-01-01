'use client';
import { useEffect, useState } from 'react';

interface ViewCounterProps {
  params: {
    slug: string
  }
}

const ViewCounter = ({ params }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const registerView = async () => {
      const response = await fetch(`/api/views/?slug=${params.slug}`, {
        method: 'POST',
      });
      const data = await response.json();
      console.log('data', data);
      setViewCount(data.views);
    };

    registerView();
  }, [params.slug]);

  return (
    <>
      views: {viewCount}
    </>
  );
};

export { ViewCounter };