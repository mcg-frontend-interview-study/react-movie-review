import {Header} from '@components/Header';
import {ItemView} from '@components/ItemView';
import {ModalContextProvider} from '@utils/ModalContext';
import {SearchContextProvider} from '@utils/SearchContext';

export const Main = () => {
  return (
    <div id="app">
      <ModalContextProvider>
        <SearchContextProvider>
          <Header />
          <ItemView />
        </SearchContextProvider>
      </ModalContextProvider>
    </div>
  );
};
