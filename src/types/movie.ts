export interface Movie {
  adult: boolean; // 성인 콘텐츠 여부
  backdrop_path: string; // 백드롭 이미지 경로
  genre_ids: number[]; // 장르 ID 배열
  id: number; // 영화 ID
  original_language: string; // 원래 언어
  original_title: string; // 원래 제목
  overview: string; // 영화 개요
  popularity: number; // 인기 점수
  poster_path: string; // 포스터 이미지 경로
  release_date: string; // 출시일
  title: string; // 영화 제목
  video: boolean; // 비디오 콘텐츠 여부
  vote_average: number; // 평균 평점
  vote_count: number; // 평점 수
}

export interface MovieList {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}
