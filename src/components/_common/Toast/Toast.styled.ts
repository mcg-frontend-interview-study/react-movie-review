import { keyframes } from 'styled-components';
import styled from 'styled-components';

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

export const ToastContainer = styled.div<{ $type: 'success' | 'error' }>`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  background: ${({ $type }) => ($type === 'success' ? '#4caf50' : '#f44336')};
  color: ${({ theme }) => theme.colors.white};
  animation: ${fadeInOut} 3s ease-in-out;
`;
