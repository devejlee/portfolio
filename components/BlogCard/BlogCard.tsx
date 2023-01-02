import styles from '@components/BlogCard/BlogCard.module.scss';
import { CloudinaryImage } from '@components/CloudinaryImage/CloudinaryImage';
import { ViewCounter } from '@components/ViewCounter/ViewCounter';
import Link from 'next/link';

interface BlogCardProps {
  slug: string
  title: string
  date: string
  bannerImage: string
  alt: string
}

const BlogCard = ({ slug, title, date, bannerImage, alt }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.bannerImageWrapper}>
        <CloudinaryImage id={bannerImage} alt={alt} fill />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <time className="text-gradient">{date}</time>
        <ViewCounter blogPage slug={slug} />
      </div>
    </Link>
  );
};

export { BlogCard };