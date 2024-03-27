import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get(
      "https://www.majorcineplex.com/apis/get_movie_avaiable"
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    // Successful response (expected status code 200)
    return response.data.token;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const errorData = error.response.data;
      let errorMessage = "Login failed."; // Default message

      if (errorData.error) {
        errorMessage = errorData.error;
      } else if (errorData.message) {
        errorMessage = errorData.message;
      }
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred during login.");
    }
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users/4");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
