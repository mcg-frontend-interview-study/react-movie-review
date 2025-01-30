import Title from '../../_common/Title/Title';
import MovieList from '../MovieList/MovieList';
import * as S from '../Movie.styled';

interface ContentProps {
  searchKeyword: string;
}

function Content({ searchKeyword }: ContentProps) {
  const titleContent =
    searchKeyword.length > 0
      ? `${searchKeyword} 검색 결과`
      : '지금 인기있는 영화';

  return (
    <S.ContentLayout>
      <Title content={titleContent} />
      <MovieList keyword={searchKeyword} />
    </S.ContentLayout>
  );
}

export default Content;
