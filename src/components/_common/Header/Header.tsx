import LargeHeader from './LargeHeader';
import MobileHeader from './MobileHeader';

interface HeaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  searchKeyword: string;
  onSearch: (keyword: string) => void;
}

function Header({ searchKeyword, onSearch, ...rest }: HeaderProps) {
  const isMobile = window.innerWidth <= 480;

  return isMobile ? (
    <MobileHeader searchKeyword={searchKeyword} onSearch={onSearch} {...rest} />
  ) : (
    <LargeHeader searchKeyword={searchKeyword} onSearch={onSearch} {...rest} />
  );
}

export default Header;
