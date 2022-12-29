import { buildUrl } from 'cloudinary-build-url';
import Image from 'next/image';
import { ImageProps } from 'next/image';

type CloudinaryImageProps = Omit<ImageProps, 'src'> & {
  id: string;
}

const CloudinaryImage = ({ id, alt, width, height, fill, loader, quality, priority, loading, placeholder, blurDataURL, unoptimized, onLoadingComplete }: CloudinaryImageProps) => {
  const url = buildUrl(id, {
    cloud: {
      cloudName: 'drcrnibbz',
    },
    transformations: {}
  });
  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      loader={loader}
      quality={quality}
      priority={priority}
      loading={loading}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      unoptimized={unoptimized}
      onLoadingComplete={onLoadingComplete} />
  );
};

export { CloudinaryImage };