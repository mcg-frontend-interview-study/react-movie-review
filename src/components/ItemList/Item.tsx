import {ResponseMovieItem} from '@type/tmdb_api_response';
import {itemCardStyle, itemScoreStyle, itemThumbnailStyle, itemTitleStyle} from './style';
import StarFilled from '@assets/star_filled.svg?react';

type ItemProps = ResponseMovieItem;

export const Item = ({poster_path, title, vote_average}: ItemProps) => {
  return (
    <div css={itemCardStyle}>
      <img
        css={itemThumbnailStyle}
        src={import.meta.env.VITE_IMAGE_URL_PREFIX + poster_path}
        loading="lazy"
        alt={title}
      />
      <p css={itemTitleStyle}>{title}</p>
      <p css={itemScoreStyle}>
        <StarFilled /> {vote_average}
      </p>
    </div>
  );
};
