import {
  detailBodyStyle,
  detailContainerStyle,
  detailContentStyle,
  detailHeaderStyle,
  movieSummaryStyle,
  outlineStyle,
  overviewStyle,
  posterStyle,
  voteMyRateStyle,
} from './style';
import {useGetMovieDetail} from '@hooks/query/useGetMovieDetail';

type ItemDetailProps = {
  selectedId: number | null;
};

export const ItemDetail = ({selectedId}: ItemDetailProps) => {
  const {detail} = useGetMovieDetail(selectedId);

  return (
    <section css={detailContainerStyle(detail?.backdrop_path ?? 's')}>
      <header css={detailHeaderStyle}>
        <h2 className="text-subtitle">{detail?.title}</h2>
      </header>
      <div css={detailBodyStyle}>
        <img css={posterStyle} src={import.meta.env.VITE_IMAGE_URL_PREFIX + detail?.poster_path} />
        <article css={detailContentStyle}>
          <figcaption css={movieSummaryStyle}>
            <div css={outlineStyle}>
              <p className="text-body"></p>
            </div>
            <p css={overviewStyle} className="text-body"></p>
          </figcaption>
          <aside css={voteMyRateStyle}></aside>
        </article>
      </div>
    </section>
  );
};
