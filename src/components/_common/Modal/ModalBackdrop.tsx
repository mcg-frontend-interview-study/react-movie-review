import * as S from './Modal.styled';

interface ModalBackdropProps {
  onClick: () => void;
}

const ModalBackdrop = ({ onClick }: ModalBackdropProps) => {
  return <S.Backdrop onClick={onClick} />;
};

export default ModalBackdrop;
