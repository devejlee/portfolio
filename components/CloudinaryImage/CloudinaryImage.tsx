import { buildUrl } from 'cloudinary-build-url';
import Image from 'next/image';
import { ImageProps } from 'next/image';

type CloudinaryImageProps = Omit<ImageProps, 'src'> & {
  id: string;
}

const CloudinaryImage = ({ id, alt, width, height, fill, loader, quality, priority, loading, placeholder, blurDataURL, unoptimized, onLoadingComplete }: CloudinaryImageProps) => {
  const urlBlurred = buildUrl(id, {
    cloud: {
      cloudName: 'drcrnibbz',
    },
    transformations: {
      effect: 'blur:1000',
      quality: 1
    }
  });

  const url = buildUrl(id, {
    cloud: {
      cloudName: 'drcrnibbz',
    },
    transformations: {}
  });

  return (
    <div style={{
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      backgroundImage: `url(${urlBlurred})`,
      backgroundPosition: 'center center',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }}>
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
    </div>
  );
};

export { CloudinaryImage };