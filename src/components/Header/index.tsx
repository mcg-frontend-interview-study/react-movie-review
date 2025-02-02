import Search from '../Search';
import movieLogo from '../../assets/logo.png';
import * as S from './styles';
import {useEffect, useState} from 'react';
import MobileSearch from '../MobileSearch';

const MOBILE_WIDTH = 440;

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Header>
      <h1>
        <S.LogoWrapper onClick={() => window.location.reload()} type="button">
          <img src={movieLogo} alt="MovieList 로고" />
        </S.LogoWrapper>
      </h1>
      {isMobile ? <MobileSearch /> : <Search />}
    </S.Header>
  );
};

export default Header;
