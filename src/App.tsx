import { useState } from 'react';
import Header from './components/_common/Header/Header';
import Title from './components/_common/Title/Title';
import MovieList from './components/Movie/MovieList/MovieList';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedKeyword = useDebounce(searchKeyword, 200);

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const titleContent =
    debouncedKeyword.length > 0
      ? `${searchKeyword} 검색 결과`
      : '지금 인기있는 영화';

  return (
    <div>
      <Header searchKeyword={searchKeyword} onSearch={handleSearch} />
      <Title content={titleContent} />
      <MovieList keyword={debouncedKeyword} />
    </div>
  );
}

export default App;
