import {useSearchContext} from '@utils/SearchContext';
import {SearchBox} from '../SearchBox';
import {headerStyle, h1Style} from './style';
import logo from '@assets/logo.png';

export const Header = () => {
  const {resetKeyword} = useSearchContext();

  return (
    <header css={headerStyle}>
      <h1 css={h1Style}>
        <img src={logo} alt="MovieList 로고" onClick={resetKeyword} />
      </h1>
      <SearchBox />
    </header>
  );
};
