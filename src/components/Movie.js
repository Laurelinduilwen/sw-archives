import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';
import Crawl from './elements/Crawl';
import { useMovieFetch } from './Hooks/useMovieFetch';
import { useCharacterFetch } from './Hooks/useCharacterFetch';
import { SEARCH_BASE_URL } from '../config';

const mapStateToProps = ({ characters, starships, films }) => ({
  characters,
  starships,
  films,
});

function Movie({ movieId, characters, films }) {
  const [movie, loading, error] = useMovieFetch(movieId);
  const [
    {
      state: { filteredCharacters },
    },
    fetchCharacter,
  ] = useCharacterFetch();

  const [searchTerm, setSearchTerm] = useState('');

  const [crawl, setCrawl] = useState(false);

  const film = films.filter(function (obj) {
    return obj.episode_id === movie.episode_id;
  })[0];

  const searchCharacters = (search) => {
    const endpoint = SEARCH_BASE_URL + search;

    setSearchTerm(search);
    fetchCharacter(endpoint);
  };

  if (error) return <div>I have a bad feeling about this...</div>;
  if (loading) return <Spinner />;
  if (!film) return <Spinner />;

  const urlInCharacter = (url) => film.characters.includes(url);
  const filmCharacters = characters.filter((item) => urlInCharacter(item.url));

  if (!filmCharacters) return <Spinner />;

  function convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    var str = '';

    for (let i of Object.keys(roman)) {
      const q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }

  return (
    <>
      <Navigation movie={!searchTerm ? movie.original_title : 'Searching Characters...'} />
      {!searchTerm && (
        <>
          {crawl === false ? (
            <MovieInfo movie={movie} />
          ) : (
            <Crawl
              title={`EPISODE ${convertToRoman(film.episode_id)}`}
              subTitle={film.title}
              text={film.opening_crawl}
            ></Crawl>
          )}
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
            toggle={() => (!crawl ? setCrawl(true) : setCrawl(false))}
          />
        </>
      )}

      <SearchBar callback={searchCharacters} />

      <Grid header={searchTerm ? 'Search Result' : 'Characters'}>
        {searchTerm.length > 2 ? (
          filteredCharacters.map((actor) => <Actor key={actor.url} actor={actor} clickable />)
        ) : searchTerm.length === 0 ? (
          filmCharacters.map((actor) => <Actor key={actor.url} actor={actor} clickable />)
        ) : (
          <h3>
            No matching Star Wars characters found or you have typed less than 3 characters to
            search...
          </h3>
        )}
      </Grid>
    </>
  );
}

export default connect(mapStateToProps)(Movie);
