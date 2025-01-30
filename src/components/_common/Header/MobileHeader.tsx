import React, { useReducer } from 'react';
import * as S from './Header.styled';

interface HeaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  searchKeyword: string;
  onSearch: (keyword: string) => void;
}

type State = boolean;
type Action = { type: 'TOGGLE' } | { type: 'OPEN' } | { type: 'CLOSE' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE':
      return !state;
    case 'OPEN':
      return true;
    case 'CLOSE':
      return false;
    default:
      return state;
  }
}

function MobileHeader({ searchKeyword, onSearch, ...rest }: HeaderProps) {
  const [isExpanded, updateState] = useReducer(reducer, false);

  const handleSearchIconClick = () => {
    updateState({ type: 'TOGGLE' });
  };

  return (
    <S.Layout>
      <a href="https://chosim-dvlpr.github.io/react-movie-review/">
        <S.LogoButton>
          <S.LogoImage src="./logo.png" />
        </S.LogoButton>
      </a>
      <S.InputBox $isExpanded={isExpanded}>
        <S.Input
          {...rest}
          value={searchKeyword}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(event.target.value)
          }
          $isDisabled={!isExpanded}
          disabled={!isExpanded}
        />
        <S.SearchIcon
          src="./search_button.png"
          onClick={handleSearchIconClick}
        />
      </S.InputBox>
    </S.Layout>
  );
}

export default MobileHeader;
