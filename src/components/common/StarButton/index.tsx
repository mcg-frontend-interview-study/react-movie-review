import * as S from './styles';
import filledStar from '../../../assets/star_filled.png';
import emptyStar from '../../../assets/star_empty.png';

export interface StarButtonState {
  isFilled: boolean;
  index: number;
}

export interface StarButtonProps {
  state: StarButtonState;
  handleClick: (index: number) => void;
}

const StarButton = ({state, handleClick: handleStarButtonClick}: StarButtonProps) => {
  const {index, isFilled} = state;

  const handleClick = () => {
    handleStarButtonClick(index);
  };

  return (
    <S.StarButton id={`starButton-${index}`} type="button" onClick={handleClick}>
      <img src={isFilled ? filledStar : emptyStar} alt={`${index}번째 ${isFilled ? '채워진' : '빈'} 별`} />
    </S.StarButton>
  );
};

export default StarButton;
