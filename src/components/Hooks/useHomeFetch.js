import { useState, useEffect } from 'react';
import { API_URL, API_URL2, API_KEY, SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      const result = await (await fetch(endpoint)).json();

      /* for collections you should use result.parts instead since https://api.themoviedb.org/3/collection/10 doesnt return you such an array */

      setState((prev) => ({
        ...prev,
        movies: isLoadMore !== -1 ? [...prev.movies, ...result.parts] : [...result.parts],
        heroImage: prev.heroImage || result,
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setLoading(false);
  };

  /*   const fetchFilmData = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      const result = await (await fetch(endpoint)).json();


      setState((prev) => ({
        ...prev,
        filmData: isLoadMore !== -1 ? [...prev.movies, ...result.results] : [...result.results],
        heroImage: prev.heroImage || result,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setLoading(false);
  }; */

  useEffect(() => {
    fetchMovies(`${API_URL}collection/10?api_key=${API_KEY}`);
    /* fetchFilmData(`${API_URL2}films`); */
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
