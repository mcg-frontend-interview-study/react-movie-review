import styled from '@emotion/styled';

export const Search = styled.div`
  background: #fff;
  padding: 8px;
  border-radius: 4px;

  button {
    width: 14px;
    border: 0;
    text-indent: -1000rem;
    background: url('../../assets/search_button.png') no-repeat center center; /* 이미지 경로 */
    background-size: contain;
  }

  input {
    font-size: 13px;

    border: 0;

    &:focus {
      outline: none;
      border: none;
    }
  }
`;
