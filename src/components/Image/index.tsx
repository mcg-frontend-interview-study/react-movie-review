import {useState} from 'react';
import {containerStyle, skeletonStyle} from './style';

type ImageProps = React.ComponentProps<'img'>;

export const Image = ({width, height, src, alt, ...imgProps}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div css={containerStyle}>
      <img src={src} alt={alt} {...imgProps} onLoad={() => setIsLoaded(true)} />
      {!isLoaded && <div css={skeletonStyle(width, height)}></div>}
    </div>
  );
};
