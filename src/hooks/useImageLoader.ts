import { useState, useEffect } from 'react';

const useImageLoader = (imagePath: string) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      setImageUrl(`https://image.tmdb.org/t/p/w220_and_h330_face${imagePath}`);
    };

    loadImage();
  }, [imagePath]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return { imageUrl, isImageLoaded, handleImageLoad };
};

export default useImageLoader;
