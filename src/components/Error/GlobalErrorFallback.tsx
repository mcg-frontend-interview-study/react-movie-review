import * as S from './GlobalErrorFallback.styled';

interface GlobalErrorFallbackProps {
  reset: () => void;
}

function GlobalErrorFallback({ reset }: GlobalErrorFallbackProps) {
  return (
    <>
      <S.Text>에러 발생!</S.Text>
      <S.Button onClick={reset}>리셋</S.Button>
    </>
  );
}

export default GlobalErrorFallback;
