import { useState, useEffect } from "react";
import { getMovies } from "../../../api";
import { getFevMoviesList } from "../../../store/moviesSlice";
import { useDispatch } from "react-redux";

export function useGetFev() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();
        const idSet = new Set(
          localStorage.getItem("fevoriteList")
            ? JSON.parse(localStorage.getItem("fevoriteList"))
            : []
        );
        const result = response.movies.filter((item) => idSet.has(item.id));
        dispatch(getFevMoviesList({ data: result }));
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
