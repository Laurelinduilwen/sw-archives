import React, { useState } from 'react';
import {
  API_URL,
  API_KEY,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
} from '../config';

import HeroImage from './elements/HeroImage';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import SearchBar from './elements/SearchBar';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';

import { useHomeFetch } from './Hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

function Home() {
  const [
    {
      state: { movies, filmData, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');
  /* search option to be implemented, leaving this here for future proofing  */

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  console.log(filmData);

  if (error) return <div>I have a bad feeling about this... </div>;
  if (!movies[0]) return <Spinner />; /* && !filmData */
  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />

      {/*       <Grid header={searchTerm ? 'Search Result' : 'Star Wars'}>
        {data.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid> */}

      <Grid header={searchTerm ? 'Search Result' : 'The Skywalker Saga'}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && <LoadMoreBtn text="Load More" cb={loadMoreMovies} />}
    </>
  );
}

export default Home;
