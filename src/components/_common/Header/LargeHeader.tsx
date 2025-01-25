import * as S from './Header.styled';

interface HeaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  searchKeyword: string;
  onSearch: (keyword: string) => void;
}

function LargeHeader({ searchKeyword, onSearch, ...rest }: HeaderProps) {
  return (
    <S.Layout>
      <S.LogoButton onClick={() => alert('Large Logo Clicked')}>
        <S.LogoImage src="./logo.png" />
      </S.LogoButton>
      <S.InputBox $isExpanded={true}>
        <S.Input
          {...rest}
          value={searchKeyword}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(event.target.value)
          }
          $isDisabled={false}
          disabled={false}
        />
        <S.SearchIcon src="./search_button.png" />
      </S.InputBox>
    </S.Layout>
  );
}

export default LargeHeader;
