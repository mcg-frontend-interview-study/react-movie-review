import * as S from './styles';
import {FallbackProps} from '../ErrorBoundary';

const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  return (
    <S.Container>
      <p>{error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>
        다시 시도하기
      </button>
    </S.Container>
  );
};

export default ErrorFallback;
