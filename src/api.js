import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get(
      "https://www.majorcineplex.com/apis/get_movie_avaiable"
    );
    return response.data;
  } catch (error) {
    throw error;
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
      // Handle 400 Bad Request specifically
      console.error("Login failed (400):", error.response.data); // Log error details for debugging

      // Extract specific error messages for user-friendly feedback
      const errorData = error.response.data;
      let errorMessage = "Login failed."; // Default message

      if (errorData.error) {
        errorMessage = errorData.error; // Use provided error message if available
      } else if (errorData.message) {
        errorMessage = errorData.message; // Use message property if available
      }

      // Display the error message to the user
      throw new Error(errorMessage); // Re-throw a user-friendly error
    } else {
      // Handle other errors generically
      console.error("Login error:", error);
      throw new Error("An unexpected error occurred during login."); // Re-throw a generic error
    }
  }
};
