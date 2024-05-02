import { FC, SyntheticEvent } from 'react';
import './styles.scss'

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
    <div className="flex lg:flex-column container">
      <div className="imageContainer">
        <img src={src} alt={alt} className="image" onError={handleImageError} />
      </div>
      <span>{responsible}</span>
    </div>
  );
};

export default ImageWrapper;
