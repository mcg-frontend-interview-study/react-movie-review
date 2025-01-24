import {boxStyle, inputStyle, buttonStyle} from './style';

export const SearchBox = () => {
  return (
    <div css={boxStyle}>
      <input type="text" placeholder="검색" css={inputStyle} />
      <button css={buttonStyle}>검색</button>
    </div>
  );
};
