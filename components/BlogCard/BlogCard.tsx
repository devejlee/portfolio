import styles from '@components/BlogCard/BlogCard.module.scss';
import Image from 'next/image';

interface BlogCardProps {
  bannerImage: string
  title: string
  date: string
}

const BlogCard = ({ bannerImage, title, date }: BlogCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.bannerImageWrapper}>
        <Image src={bannerImage} alt="post image" fill />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <time className="text-gradient">{date}</time>
      </div>
    </div>
  );
};

export { BlogCard };