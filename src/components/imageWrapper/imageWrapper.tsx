import { FC, SyntheticEvent } from 'react';
import styles from './imageWrapper.module.scss';

interface ImageWrapperProps {
  src: string;
  alt: string;
  responsible: string;
}

const ImageWrapper: FC<ImageWrapperProps> = ({ src, alt, responsible }) => {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  };

  return (
    <div className={`flex lg:flex-column ${styles.container}`}>
      <div className={styles.imageContainer}>
        <img src={src} alt={alt} className={styles.image} onError={handleImageError} />
      </div>
      <span>{responsible}</span>
    </div>
  );
};

export default ImageWrapper;
