import React, { useState } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import HeroImage from './elements/HeroImage';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';

import { useHomeFetch } from './Hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

function Home() {
  const [
    {
      state: { movies, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch();

  if (error) return <div>I have a bad feeling about this... </div>;
  if (!movies[0]) return <Spinner />;
  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />

      <Grid header="The Skywalker Saga">
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
    </>
  );
}

export default Home;
