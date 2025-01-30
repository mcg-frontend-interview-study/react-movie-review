import { DISPLAY_SIZE } from '../../../constants/displaySize';
import LargeHeader from './LargeHeader';
import MobileHeader from './MobileHeader';

interface HeaderProps {
  searchKeyword: string;
  onSearch: (keyword: string) => void;
}

function Header({ searchKeyword, onSearch }: HeaderProps) {
  const isMobile = document.documentElement.clientWidth <= DISPLAY_SIZE.mobile;

  return isMobile ? (
    <MobileHeader searchKeyword={searchKeyword} onSearch={onSearch} />
  ) : (
    <LargeHeader searchKeyword={searchKeyword} onSearch={onSearch} />
  );
}

export default Header;
