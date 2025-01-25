import { useState } from 'react';
import Header from './components/_common/Header/Header';
import Content from './components/Movie/Content/Content';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <div>
      <Header searchKeyword={searchKeyword} onSearch={handleSearch} />
      <Content searchKeyword={searchKeyword} />
    </div>
  );
}

export default App;
