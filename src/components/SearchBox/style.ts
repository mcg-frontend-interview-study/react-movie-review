import {css} from '@emotion/react';
import searchButton from '@assets/search_button.png';

export const boxStyle = css({
  background: '#fff',
  padding: 8,
  borderRadius: 4,
});

export const inputStyle = css({
  border: 0,
});

export const buttonStyle = css({
  width: 14,
  border: 0,
  textIndent: -1000,
  color: 'transparent',
  background: `url("${searchButton}") transparent no-repeat 0 1px`,
  backgroundSize: 'contain',
});
