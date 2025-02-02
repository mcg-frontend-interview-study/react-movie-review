import styled from '@emotion/styled';
import searchImg from '../../assets/search_button.png';

export const Search = styled.section`
  display: flex;
  height: 3rem;

  background: #fff;
  padding: 8px;
  border-radius: 4px;
  position: relative;

  button {
    width: 14px;
    border: 0;
    text-indent: -1000rem;
    background: url(${searchImg}) no-repeat center center;
    background-size: contain;
    z-index: 2;
    position: relative;
    height: 100%;
  }
`;

export const SearchInput = styled.input<{$isInputOpen: boolean}>`
  font-size: 13px;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  border: 0;
  padding: 8px;
  background: white;
  border-radius: 4px;

  transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;

  width: ${({$isInputOpen}) => ($isInputOpen ? '88vw' : '0px')};
  opacity: ${({$isInputOpen}) => ($isInputOpen ? 1 : 0)};

  &:focus {
    outline: none;
    border: none;
  }
`;
