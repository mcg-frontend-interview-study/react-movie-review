import React, {useRef} from 'react';

import * as S from './styles.ts';
import useModalClose from '../../../hooks/useModalClose.ts';

interface ModalBackgroundProps {
  closeModal: (() => void) | null;
  children?: React.ReactNode;
}

const ModalBackground = ({children, closeModal}: ModalBackgroundProps) => {
  const modalBackgroundRef = useRef<HTMLDivElement>(null);
  useModalClose({closeModal, modalBackgroundRef});

  return <S.ModalBackground ref={modalBackgroundRef}>{children}</S.ModalBackground>;
};
export default ModalBackground;
