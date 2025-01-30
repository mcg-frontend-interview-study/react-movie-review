import {
  detailBodyStyle,
  detailContainerStyle,
  detailContentStyle,
  detailHeaderStyle,
  h2Style,
  movieSummaryStyle,
  outlineStyle,
  overviewStyle,
  posterStyle,
  pStyle,
  voteAverageStyle,
  voteMyRateStyle,
} from './style';
import {useGetMovieDetail} from '@hooks/query/useGetMovieDetail';
import StarFilled from '@assets/star_filled.svg?react';
import {StarRating} from '@components/StarRating';
import {useGetMovieScore} from '@hooks/query/useGetMovieScore';
import {usePostMovieScore} from '@hooks/mutation/usePostMovieScore';
import {usePatchMovieScore} from '@hooks/mutation/usePatchMovieScore';
import {useTheme} from '@emotion/react';
import {Image} from '@components/Image';

type ItemDetailProps = {
  selectedId: number | null;
};

const SCORE_TEXT: Record<number, string> = {
  2: '최악이예요',
  4: '별로예요',
  6: '보통이에요',
  8: '재미있어요',
  10: '명작이에요',
};

export const ItemDetail = ({selectedId}: ItemDetailProps) => {
  const {detail} = useGetMovieDetail(selectedId);
  const {id, vote} = useGetMovieScore(selectedId);
  const {postMovieScore} = usePostMovieScore();
  const {patchMovieScore} = usePatchMovieScore();
  const theme = useTheme();

  const onClick = (event: React.MouseEvent<HTMLFieldSetElement, MouseEvent>) => {
    const getScore = Number((event.target as HTMLElement).closest('svg')?.id);

    if (!selectedId) return;

    if (id === -1) {
      postMovieScore({id: selectedId, vote: getScore});
    } else {
      patchMovieScore({id: selectedId, vote: getScore});
    }
  };

  const imagePath = detail && import.meta.env.VITE_IMAGE_URL_PREFIX + detail.poster_path;

  return (
    <section css={detailContainerStyle(detail?.backdrop_path ?? '')}>
      <header css={detailHeaderStyle}>
        <h2 css={h2Style(theme)}>{detail?.title}</h2>
      </header>
      <figure css={detailBodyStyle}>
        <Image css={posterStyle} src={imagePath} alt={detail?.title} />
        <article css={detailContentStyle}>
          <figcaption css={movieSummaryStyle}>
            <div css={outlineStyle}>
              <p css={pStyle(theme)}>{detail?.genres.map(genre => genre.name).join(', ')}</p>
              <div css={voteAverageStyle(theme)}>
                <StarFilled />
                {detail?.vote_average}
              </div>
            </div>
            <p css={overviewStyle(theme)}>{detail?.overview}</p>
          </figcaption>
          <aside css={voteMyRateStyle}>
            <p css={pStyle(theme)}>내 별점</p>
            <StarRating value={vote} onClick={onClick} />
            <p css={pStyle(theme)}>{vote}</p>
            <p css={pStyle(theme)}>{SCORE_TEXT[vote]}</p>
          </aside>
        </article>
      </figure>
    </section>
  );
};
