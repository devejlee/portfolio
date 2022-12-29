import styles from '@components/BlogCard/BlogCard.module.scss';
import Link from 'next/link';
import { CloudinaryImage } from '@components/CloudinaryImage/CloudinaryImage';

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
      </div>
    </Link>
  );
};

export { BlogCard };