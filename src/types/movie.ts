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

export interface MovieDetail extends Movie {
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null; // 컬렉션 정보 (옵션)
  budget: number; // 예산
  genres: {id: number; name: string}[]; // 장르 객체 배열
  homepage: string; // 홈페이지 URL
  imdb_id: string; // IMDb ID
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }[]; // 제작 회사 정보
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[]; // 제작 국가 정보
  revenue: number; // 수익
  runtime: number; // 런타임
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[]; // 사용 언어 정보
  status: string; // 영화 상태 (예: Released)
  tagline: string; // 태그라인
}
