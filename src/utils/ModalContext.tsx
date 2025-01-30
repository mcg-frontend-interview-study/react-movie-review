import {createContext, useContext, useState} from 'react';

type ModalContextType = {
  isModalOpen: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext는 ModalContextProvider 안에서 사용되어야합니다.');
  }

  return context;
};

export const ModalContextProvider = ({children}: React.PropsWithChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{handleModalOpen, handleModalClose, isModalOpen}}>{children}</ModalContext.Provider>
  );
};
