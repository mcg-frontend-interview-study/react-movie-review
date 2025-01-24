import * as S from './styles';
import StarButton, {StarButtonState} from '../common/StarButton';
import {useEffect, useState} from 'react';

const STAR_BUTTON_COUNT = 5;

const RATE_DESCRIPTION: Record<number, string> = {
  0: '',
  2: '최악이예요',
  4: '별로예요',
  6: '보통이에요',
  8: '재미있어요',
  10: '명작이에요',
} as const;

const INITIAL_STAR_BUTTON_LIST: StarButtonState[] = Array.from({length: STAR_BUTTON_COUNT}, (_, i) => ({
  index: i + 1,
  isFilled: false,
}));

const MyRating = () => {
  const [starButtonStateList, setStarButtonStateList] = useState<StarButtonState[]>(INITIAL_STAR_BUTTON_LIST);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleStarButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    setStarButtonStateList(prev =>
      prev.map(state => ({
        ...state,
        isFilled: state.index <= (selectedIndex ?? 0),
      })),
    );
  }, [selectedIndex]);

  return (
    <S.MyRating>
      <S.Title>내 별점</S.Title>
      <S.StarButtonContainer>
        {starButtonStateList.map(state => (
          <StarButton state={state} handleClick={handleStarButtonClick} />
        ))}
      </S.StarButtonContainer>
      <S.RateDescription>
        <S.RateNumber>{selectedIndex * 2}</S.RateNumber>
        <S.RateText>{RATE_DESCRIPTION[selectedIndex * 2]}</S.RateText>
      </S.RateDescription>
    </S.MyRating>
  );
};

export default MyRating;
