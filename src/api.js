import axios from 'axios';

export const getMovies = () => {
    try {
        const response = axios.get('https://www.majorcineplex.com/apis/get_movie_avaiable')
        return response
    } catch (error) {
        console.error(error);
    }

}