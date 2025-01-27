import styled from 'styled-components';
import media from '../../../styles/mediaQueries';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

// Text

export const TitleText = styled.p`
  ${({ theme }) => theme.font.body};
  text-align: center;
`;

export const CaptionText = styled.p`
  ${({ theme }) => theme.font.caption};
`;

export const CaptionBoldText = styled.p`
  ${({ theme }) => theme.font.caption};
  font-weight: 700;
  white-space: nowrap;
`;

export const OverviewText = styled.p`
  ${({ theme }) => theme.font.caption};
  text-align: start;
`;

export const RatingDescriptionText = styled.p`
  ${({ theme }) => theme.font.caption};

  ${media.tablet`
      display: none;
    `}
`;

// Box Layout

export const TitleBox = styled.div`
  position: relative;
  width: 100%;

  padding: 1.8rem 0;
  border-bottom: 1px solid rgba(241, 241, 241, 0.25);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;

  width: 100%;
  height: calc(100% - 6.4rem);

  padding: 3.6rem 3.2rem 4.8rem;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DetailHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;

export const DetailContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
`;

export const DetailVoteBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
  padding: 1.6rem;
  border-radius: 1.6rem;

  background: ${({ theme }) => theme.colors.greyScale2};

  ${media.tablet`
      justify-content: center;
    `}
`;

export const StarImageVoteBox = styled.div`
  display: flex;
  flex-direction: row;
`;

// Image

export const ThumbnailImage = styled.img`
  width: 29.2rem;
  height: 43.3rem;

  ${media.desktop`
      width: 26rem;
      height: 40rem;
    `}

  ${media.tablet`
      display: none;
    `}
`;

export const StarImage = styled.img`
  width: 2.6rem;
  height: 2.6rem;

  cursor: pointer;

  ${media.tablet`
      width: 3.2rem;
      height: 3.2rem;
    `}
`;
