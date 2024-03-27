import { useState, useEffect } from "react";
import { getMovies, getUser } from "../../../api";
import { getMovie } from "../../../store/moviesSlice";
import { saveUser } from "../../../store/userSlice";
import { useDispatch } from "react-redux";

export function useGetMovies() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response, resUser] = await Promise.all([getMovies(), getUser()]);
        dispatch(getMovie({ data: response.movies }));
        dispatch(saveUser({ data: resUser.data }));
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
