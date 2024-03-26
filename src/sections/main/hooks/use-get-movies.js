import { useState, useEffect } from "react";
import { getMovies } from "../../../api";
import { getMovie } from "../../../store/moviesSlice";
import { useDispatch } from "react-redux";

export function useGetMovies() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();
        dispatch(getMovie({ data: response.movies }));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error };
}
