import styled from 'styled-components';
import media from '../../../styles/mediaQueries';

export const Layout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  position: relative;

  width: 100%;
  height: 6rem;
  padding: 0.8rem 3.2rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 8px 0px rgba(255, 255, 255, 0.2);

  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(17, 17, 17, 1);
`;

export const LogoImage = styled.img`
  width: 12.3rem;
  height: 2rem;
`;

export const LogoButton = styled.button`
  cursor: pointer;
`;

export const InputBox = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  right: 3.2rem;

  width: 100%;
  max-width: 32rem;
  height: 4.4rem;
  padding: 1rem 1.4rem;

  border: 1px solid rgba(208, 213, 221, 1);
  border-radius: 0.8rem;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  transition: width 0.2s ease;

  ${({ $isExpanded }) => media.mobile`
      position: absolute;
      width: ${$isExpanded ? 'calc(100% - 6.4rem)' : '4.8rem'};
      max-width: 100%;
      height: 4.4rem;
    `};
`;

export const Input = styled.input<{ $isDisabled: boolean }>`
  width: 100%;
  height: 100%;

  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};
  transition: width 0.2s ease;

  ${({ $isDisabled }) => media.mobile`
      display: ${$isDisabled ? 'none' : 'block'};

      width: ${$isDisabled ? 0 : '100%'};
      height: ${$isDisabled ? 0 : '100%'};
    `}
`;

export const SearchIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;

  cursor: pointer;
`;
