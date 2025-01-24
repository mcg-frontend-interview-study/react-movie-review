import * as S from './Header.styled';

interface HeaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  searchKeyword: string;
  onSearch: (keyword: string) => void;
}

function Header({ searchKeyword, onSearch, ...rest }: HeaderProps) {
  return (
    <div>
      logo
      <S.Input
        {...rest}
        value={searchKeyword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onSearch(event.target.value)
        }
      />
    </div>
  );
}

export default Header;
