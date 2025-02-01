import {useState, useEffect} from 'react';
import {useAtom} from 'jotai';
import {StarButtonState} from '../components/common/StarButton';
import {myRateListAtom} from '../jotai/atoms';

const STAR_BUTTON_COUNT = 5;

const INITIAL_STAR_BUTTON_LIST: StarButtonState[] = Array.from({length: STAR_BUTTON_COUNT}, (_, i) => ({
  index: i + 1,
  isFilled: false,
}));

const RATE_DESCRIPTION: Record<number, string> = {
  0: '',
  2: '최악이예요',
  4: '별로예요',
  6: '보통이에요',
  8: '재미있어요',
  10: '명작이에요',
} as const;

const useStarRating = (movieId: number) => {
  const [myRateList, setMyRateList] = useAtom(myRateListAtom);

  const [starButtonStateList, setStarButtonStateList] = useState<StarButtonState[]>(INITIAL_STAR_BUTTON_LIST);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleStarButtonClick = (index: number) => {
    setSelectedIndex(index);

    // 로컬 스토리지 업데이트
    setMyRateList(prev => {
      const updatedList = prev
        ? [...prev.filter(rate => rate.movieId !== movieId), {movieId, starButtonIndex: index}]
        : [{movieId, starButtonIndex: index}];

      return updatedList;
    });
  };

  // movieId가 변할 때마다 selectedIndex 갱신
  useEffect(() => {
    const savedRate = myRateList?.find(rate => rate.movieId === movieId);

    if (savedRate) {
      setSelectedIndex(savedRate.starButtonIndex);
    }
  }, [myRateList, movieId]);

  // selectedIndex에 따라 별 상태 업데이트
  useEffect(() => {
    setStarButtonStateList(prev =>
      prev.map(state => ({
        ...state,
        isFilled: state.index <= selectedIndex,
      })),
    );
  }, [selectedIndex]);

  return {
    starButtonStateList,
    selectedIndex,
    rateDescription: RATE_DESCRIPTION[selectedIndex * 2],
    handleStarButtonClick,
  };
};

export default useStarRating;
