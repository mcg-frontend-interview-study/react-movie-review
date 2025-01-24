import StarEmpty from '@assets/star_empty.svg?react';
import StarFilled from '@assets/star_filled.svg?react';
import {containerStyle} from './style';

type StarRatingProps = {
  value: number;
  onClick: (event: React.MouseEvent<HTMLFieldSetElement, MouseEvent>) => void;
};

const SCORE = [2, 4, 6, 8, 10];

export const StarRating = ({value, onClick}: StarRatingProps) => {
  return (
    <fieldset css={containerStyle} onClick={onClick}>
      {SCORE.map((score, index) => {
        if (value >= score) {
          return <StarFilled key={index} id={score.toString()} style={{cursor: 'pointer'}} />;
        } else {
          return <StarEmpty key={index} id={score.toString()} style={{cursor: 'pointer'}} />;
        }
      })}
    </fieldset>
  );
};
