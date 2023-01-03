import useSWR, { preload } from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const useViews = (slug: string) => {
  preload(`/api/views/?slug=${slug}`, fetcher);
  const { data, isLoading, error, mutate } = useSWR(`/api/views/?slug=${slug}`, fetcher);

  return {
    data,
    isLoading,
    error,
    mutate
  };
};