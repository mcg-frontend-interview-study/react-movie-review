import React, { createContext, useState, useCallback } from 'react';

interface ToastContextType {
  message: string;
  type: 'error' | 'success' | null;
  showToast: (message: string, type: 'error' | 'success') => void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<'error' | 'success' | null>(null);

  const showToast = useCallback(
    (message: string, toastType: 'error' | 'success') => {
      setMessage(message);
      setType(toastType);

      setTimeout(() => {
        setMessage('');
        setType(null);
      }, 3000);
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ message, type, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
