import {ClickOutsideDetector} from '@components/ClickOutsideDetector';
import {backdropStyle, closeButtonStyle, modalStyle} from './style';
import {createPortal} from 'react-dom';
import Close from '@assets/close.svg?react';
import {useModalContext} from '@utils/ModalContext';

export const Modal = ({children}: React.PropsWithChildren) => {
  const {isModalOpen, handleModalClose} = useModalContext();

  return (
    isModalOpen &&
    createPortal(
      <div css={backdropStyle}>
        <ClickOutsideDetector css={modalStyle} onClickOutside={handleModalClose}>
          <Close css={closeButtonStyle} onClick={handleModalClose} />
          {children}
        </ClickOutsideDetector>
      </div>,
      document.body,
    )
  );
};
