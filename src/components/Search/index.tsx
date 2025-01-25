import {useSetAtom} from 'jotai';
import * as S from './styles';
import {searchTextAtom} from '../../jotai/atoms';
import {useState} from 'react';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const setSearchText = useSetAtom(searchTextAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchText(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <S.Search>
      <S.SearchInput
        type="text"
        placeholder="검색"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        검색
      </button>
    </S.Search>
  );
};

export default Search;
