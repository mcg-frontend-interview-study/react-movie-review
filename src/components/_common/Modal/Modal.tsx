import React, { Suspense, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './Modal.styled';
import useEscapeKey from '../../../hooks/useEscapeKey';
import ModalBackdrop from './ModalBackdrop';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ANIMATION_DURATION_TIME = 200;

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const portalElement = document.getElementById('modal') as HTMLElement;
  const [isRender, setIsRender] = useState(isOpen);

  useEscapeKey(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      setIsRender(true);
    } else {
      const timer = setTimeout(() => {
        setIsRender(false);
      }, ANIMATION_DURATION_TIME);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!portalElement || !isRender) {
    return null;
  }

  const modalLayout = (
    <S.Layout>
      <ModalBackdrop onClick={onClose} />
      <S.ContentLayout
        $isRender={isRender && isOpen}
        $animationTime={ANIMATION_DURATION_TIME}
      >
        <Suspense fallback={<>로딩 중</>}>{children}</Suspense>
      </S.ContentLayout>
    </S.Layout>
  );

  return isRender && createPortal(modalLayout, portalElement);
};

export default Modal;
