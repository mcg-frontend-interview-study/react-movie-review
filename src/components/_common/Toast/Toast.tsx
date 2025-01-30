import { useToast } from '../../../hooks/useToast';
import * as S from './Toast.styled';

function Toast() {
  const { message, type } = useToast();

  if (!message || !type) return null;

  return <S.ToastContainer $type={type}>{message}</S.ToastContainer>;
}

export default Toast;
