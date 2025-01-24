import {useSearchContext} from '@utils/SearchContext';
import {boxStyle, inputStyle, buttonStyle} from './style';

export const SearchBox = () => {
  const {input, handleInput, onSubmit} = useSearchContext();

  return (
    <form css={boxStyle} onSubmit={onSubmit}>
      <input type="text" placeholder="검색" css={inputStyle} onChange={handleInput} value={input} />
      <button type="submit" css={buttonStyle}>
        검색
      </button>
    </form>
  );
};
