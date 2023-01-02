'use client';
import styles from '@components/ViewCounter/ViewCounter.module.scss';
import { useEffect } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import useSWR from 'swr';

interface ViewCounterProps {
  blogPage: boolean
  slug: string
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const ViewCounter = ({ blogPage, slug }: ViewCounterProps) => {
  const views = useSWR(
    `/api/views/?slug=${slug}`,
    fetcher
  );

  useEffect(() => {
    if (blogPage) return;

    const registerView = async () => {
      const response = await fetch(`/api/views/?slug=${slug}`, {
        method: 'POST',
      });
      const data = await response.json();
    };

    registerView();
  }, [blogPage, slug]);

  if (views.error) {
    return (
      <div className={styles.wrapper}>
        <AiOutlineEye />
        <span>error</span>
      </div>
    );
  }

  if (views.isLoading) {
    return (
      <div className={styles.wrapper}>
        <AiOutlineEye />
        <span>— views</span>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <AiOutlineEye />
      <span>{views.data.total > 0 ? views.data.total : 0} views</span>
    </div>
  );
};

export { ViewCounter };