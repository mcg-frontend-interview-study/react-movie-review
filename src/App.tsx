import { useState } from 'react';
import Header from './components/_common/Header/Header';
import Title from './components/_common/Title/Title';
import MovieList from './components/Movie/MovieList/MovieList';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const titleContent =
    searchKeyword.length > 0
      ? `${searchKeyword} 검색 결과`
      : '지금 인기있는 영화';

  return (
    <div>
      <Header searchKeyword={searchKeyword} onSearch={handleSearch} />
      <Title content={titleContent} />
      <MovieList keyword={searchKeyword} />
    </div>
  );
}

export default App;
