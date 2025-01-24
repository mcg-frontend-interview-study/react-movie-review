import {Header} from '@components/Header';
import {ItemView} from '@components/ItemView';
import {SearchContextProvider} from '@utils/SearchContext';

export const Main = () => {
  return (
    <div id="app">
      <SearchContextProvider>
        <Header />
        <ItemView />
      </SearchContextProvider>
    </div>
  );
};
