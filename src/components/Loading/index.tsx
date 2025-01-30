import {containerStyle, spinnerStyle} from './style';

export const Loading = () => {
  return (
    <div css={containerStyle}>
      <div css={spinnerStyle}></div>
    </div>
  );
};
