import Search from '../Search';
import movieLogo from '../../assets/logo.png';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <h1>
        <img src={movieLogo} alt="MovieList 로고" />
        <Search />
      </h1>
    </S.Header>
  );
};

export default Header;
