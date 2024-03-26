import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import React from "react";

import WidgetMovie from "./widget-movie";
import { useGetMovies } from "./hooks";

import { products } from "../../_mock/products";

import CircularProgress from "@mui/material/CircularProgress";

export default function AppMain() {
  const { movies, loading, error } = useGetMovies();

  console.log(movies);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6" sx={{ mr: 5, ml: 5 }}>
          LOADING Movies....
        </Typography>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h4" sx={{ mb: 5 }} display="flex">
          Movies Finder
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid key={index} xs={12} sm={6} md={3}>
            <WidgetMovie movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
