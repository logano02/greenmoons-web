import { useState, useEffect } from 'react';
import { getMovies } from '../../../api';

export function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();
        setMovies(response.movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { movies, loading, error };
}
