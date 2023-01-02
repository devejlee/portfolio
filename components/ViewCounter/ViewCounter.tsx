'use client';
import styles from '@components/ViewCounter/ViewCounter.module.scss';
import { useEffect } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useViews } from '@hooks/useViews';

interface ViewCounterProps {
  blogPage: boolean
  slug: string
}

const ViewCounter = ({ blogPage, slug }: ViewCounterProps) => {
  const { data, isLoading, error, mutate } = useViews(slug);

  useEffect(() => {
    if (blogPage) return;

    const registerView = async () => {
      const response = await fetch(`/api/views/?slug=${slug}`, {
        method: 'POST',
      });
      const data = await response.json();
      mutate({ ...data });
    };

    registerView();
  }, [blogPage, slug, mutate]);

  if (error) {
    return (
      <div className={styles.wrapper}>
        <AiOutlineEye />
        <span>error</span>
      </div>
    );
  }

  if (isLoading) {
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
      <span>{data.total ?? 0} views</span>
    </div>
  );
};

export { ViewCounter };