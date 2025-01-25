import Search from '../Search';
import movieLogo from '../../assets/logo.png';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <h1>
        <S.LogoWrapper onClick={() => window.location.reload()} type="button">
          <img src={movieLogo} alt="MovieList 로고" />
        </S.LogoWrapper>
      </h1>
      <Search />
    </S.Header>
  );
};

export default Header;
