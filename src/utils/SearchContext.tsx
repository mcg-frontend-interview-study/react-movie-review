import {createContext, useContext, useState} from 'react';

type SearchContextType = {
  keyword: string;
  input: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  resetKeyword: () => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchContext는 SearchContextProvider 안에서 사용되어야합니다.');
  }

  return context;
};

export const SearchContextProvider = ({children}: React.PropsWithChildren) => {
  const [keyword, setKeyword] = useState('');
  const [input, setInput] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKeyword(input);
    setInput('');
  };

  const resetKeyword = () => {
    setKeyword('');
  };

  return (
    <SearchContext.Provider value={{keyword, input, handleInput, onSubmit, resetKeyword}}>
      {children}
    </SearchContext.Provider>
  );
};
