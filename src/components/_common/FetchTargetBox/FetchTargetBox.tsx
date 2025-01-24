import { forwardRef } from 'react';
import * as S from './FetchTargetBox.styled';

function FetchTargetBox(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <S.Layout ref={ref} {...props}>
      . . .
    </S.Layout>
  );
}

export default forwardRef(FetchTargetBox);
