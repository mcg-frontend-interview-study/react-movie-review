import * as S from './styles';
import StarButton from '../common/StarButton';
import useStarRating from '../../hooks/useStarRating';

export interface MyRatingProps {
  movieId: number;
}

const MyRating = ({movieId}: MyRatingProps) => {
  const {starButtonStateList, selectedIndex, rateDescription, handleStarButtonClick} = useStarRating(movieId);

  return (
    <S.MyRating>
      <S.Title>내 별점</S.Title>
      <S.StarButtonContainer>
        {starButtonStateList.map(state => (
          <StarButton key={state.index} state={state} handleClick={handleStarButtonClick} />
        ))}
      </S.StarButtonContainer>
      <S.RateDescription>
        <S.RateNumber>{selectedIndex * 2}</S.RateNumber>
        <S.RateText>{rateDescription}</S.RateText>
      </S.RateDescription>
    </S.MyRating>
  );
};

export default MyRating;
