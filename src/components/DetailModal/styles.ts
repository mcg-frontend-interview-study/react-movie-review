import styled from '@emotion/styled';

export const ModalContainer = styled.article`
  width: 45rem;
  height: 28rem;

  padding: 1rem 2rem;

  font-size: 1rem;
  background-color: black;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;
`;

export const Header = styled.section`
  text-align: center;
  font-size: 1.4rem;
  position: relative;

  padding-bottom: 0.5rem;
  margin-bottom: 0.8rem;
  border-bottom: 0.1rem solid gray;

  button {
    font-size: 0.8rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    color: white;
    background: none;
    border: none;
  }
`;

export const Content = styled.section`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  position: relative;
`;

export const Poster = styled.img`
  width: 35%;
  height: 22rem;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const ShortInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-item: center;

  margin-top: 1.2rem;
  margin-bottom: 2rem;
`;

export const Genres = styled.article``;
export const Rate = styled.article`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1rem;
    height: 1rem;
  }

  span {
  }
`;
export const Overview = styled.article`
  margin-bottom: 3rem;
  line-height: 1.3;
  height: 10rem;
  overflow-y: auto;
`;

export const MyRatingWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
