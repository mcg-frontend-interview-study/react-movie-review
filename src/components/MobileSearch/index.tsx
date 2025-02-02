import {useSetAtom} from 'jotai';
import * as S from './styles';
import {searchTextAtom} from '../../jotai/atoms';
import {useState} from 'react';

const MobileSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputOpen, setIsInputOpen] = useState(false);
  const setSearchText = useSetAtom(searchTextAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchText(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.nativeEvent.code === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearchButtonClick = () => {
    if (isInputOpen && inputValue.trim()) {
      handleSearch();
      return;
    }

    setIsInputOpen(!isInputOpen);
  };

  return (
    <S.Search>
      <S.SearchInput
        type="text"
        placeholder="검색"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        $isInputOpen={isInputOpen}
      />
      <button type="button" onClick={handleSearchButtonClick}>
        검색
      </button>
    </S.Search>
  );
};

export default MobileSearch;
