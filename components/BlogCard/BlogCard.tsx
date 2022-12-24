import styles from '@components/BlogCard/BlogCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  slug: string
  bannerImage: string
  title: string
  date: string
}

const BlogCard = ({ slug, bannerImage, title, date }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.bannerImageWrapper}>
        <Image src={bannerImage} alt="post image" fill />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <time className="text-gradient">{date}</time>
      </div>
    </Link>
  );
};

export { BlogCard };