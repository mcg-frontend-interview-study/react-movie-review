import {ClickOutsideDetector} from '@components/ClickOutsideDetector';
import {backdropStyle, closeButtonStyle, modalStyle} from './style';
import {useRef} from 'react';
import {createPortal} from 'react-dom';
import Close from '@assets/close.svg?react';
import {useModalContext} from '@utils/ModalContext';

export const Modal = ({children}: React.PropsWithChildren) => {
  const {isModalOpen, handleModalClose} = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <ClickOutsideDetector targetRef={modalRef} onClickOutside={handleModalClose}>
      {isModalOpen &&
        createPortal(
          <div css={backdropStyle}>
            <div css={modalStyle} ref={modalRef}>
              <Close css={closeButtonStyle} onClick={handleModalClose} />
              {children}
            </div>
          </div>,
          document.body,
        )}
    </ClickOutsideDetector>
  );
};
