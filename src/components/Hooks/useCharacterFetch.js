import { useState, useEffect } from 'react';
import { SEARCH_BASE_URL } from '../../config';

export const useCharacterFetch = () => {
  const [state, setState] = useState({ filteredCharacters: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharacter = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();

      setState((prev) => ({
        ...prev,
        filteredCharacters: [...result.results],
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCharacter(SEARCH_BASE_URL);
  }, []);

  return [{ state, loading, error }, fetchCharacter];
};
