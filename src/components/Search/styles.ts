import styled from '@emotion/styled';
import searchImg from '../../assets/search_button.png';

export const Search = styled.section`
  display: flex;
  height: 3rem;

  background: #fff;
  padding: 8px;
  border-radius: 4px;

  button {
    width: 14px;
    border: 0;
    text-indent: -1000rem;
    background: url(${searchImg}) no-repeat center center;
    background-size: contain;
  }
`;

export const SearchInput = styled.input`
  font-size: 13px;

  border: 0;

  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 434px) {
    width: 0.1rem;
  }
`;
