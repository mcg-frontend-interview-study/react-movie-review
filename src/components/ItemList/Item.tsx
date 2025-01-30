import {ResponseMovieItem} from '@type/tmdb_api_response';
import {itemCardStyle, itemScoreStyle, itemThumbnailStyle, itemTitleStyle} from './style';
import StarFilled from '@assets/star_filled.svg?react';
import {Image} from '@components/Image';

type ItemProps = ResponseMovieItem;

export const Item = ({id, poster_path, title, vote_average}: ItemProps) => {
  return (
    <li css={itemCardStyle} id={id.toString()}>
      <Image
        css={itemThumbnailStyle}
        src={import.meta.env.VITE_IMAGE_URL_PREFIX + poster_path}
        loading="lazy"
        alt="title"
        height={300}
      />
      <p css={itemTitleStyle}>{title}</p>
      <p css={itemScoreStyle}>
        <StarFilled /> {vote_average}
      </p>
    </li>
  );
};
