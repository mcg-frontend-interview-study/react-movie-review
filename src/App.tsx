import { useState } from 'react';
import Header from './components/_common/Header/Header';
import Content from './components/Movie/Content/Content';
import { useDebounce } from './hooks/useDebounce';
import GlobalErrorBoundary from './components/Error/GlobalErrorBoundary';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const debouncedKeyword = useDebounce(searchKeyword, 200);

  return (
    <>
      <Header searchKeyword={searchKeyword} onSearch={handleSearch} />
      <GlobalErrorBoundary>
        <Content searchKeyword={debouncedKeyword} />
      </GlobalErrorBoundary>
    </>
  );
}

export default App;
