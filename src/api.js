import axios from 'axios';

export const getMovies = async () => {
  try {
    const response = await axios.get('https://www.majorcineplex.com/apis/get_movie_avaiable');
    return response.data;
  } catch (error) {
    throw error;
  }
};
