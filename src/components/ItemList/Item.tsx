import {itemCardStyle, itemScoreStyle, itemThumbnailStyle, itemTitleStyle} from './style';
import starFilled from '@assets/star_filled.png';

export const Item = () => {
  return (
    <div css={itemCardStyle}>
      <img
        css={itemThumbnailStyle}
        src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
        loading="lazy"
        alt="앤트맨과 와스프: 퀀텀매니아"
      />
      <p css={itemTitleStyle}>앤트맨과 와스프: 퀀텀매니아</p>
      <p css={itemScoreStyle}>
        <img src={starFilled} alt="별점" /> 6.5
      </p>
    </div>
  );
};
