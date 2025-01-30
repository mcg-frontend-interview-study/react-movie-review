import { useState } from 'react';
import Header from './components/_common/Header/Header';
import Content from './components/Movie/Content/Content';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const debouncedKeyword = useDebounce(searchKeyword, 200);

  return (
    <>
      <Header searchKeyword={searchKeyword} onSearch={handleSearch} />
      <Content searchKeyword={debouncedKeyword} />
    </>
  );
}

export default App;
