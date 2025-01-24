import { createContext, useContext, useState } from 'react';

interface ModalContextValue {
  modalKeyList: Map<string, string>;
  setModalKeyList: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  openModal: (modalKey: string) => void;
  closeModal: (modalKey: string) => void;
  isOpenModal: boolean;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalKeyList, setModalKeyList] = useState(new Map());

  const openModal = (modalKey: string) => {
    setModalKeyList(prev => {
      const updated = new Map(prev);
      updated.set(modalKey, modalKey);
      return updated;
    });
    setIsOpenModal(true);
  };

  const closeModal = (modalKey: string) => {
    setModalKeyList(prev => {
      const updated = new Map(prev);
      modalKeyList.delete(modalKey);
      return updated;
    });
    setIsOpenModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalKeyList,
        setModalKeyList,
        openModal,
        closeModal,
        isOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'useModalContext must be used within a ModalProviderLister',
    );
  }
  return context;
};
