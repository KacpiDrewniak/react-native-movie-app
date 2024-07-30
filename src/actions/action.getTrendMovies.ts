import {api} from '../api';
import {endpoints} from '../api/endpoints.ts';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getTrendMovies = async (page: number) => {
  return (
    await api.get<MovieResponse>(endpoints.getMovies, {
      params: {
        page,
      },
    })
  ).data;
};
