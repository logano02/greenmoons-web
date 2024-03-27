import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import React from "react";

import WidgetMovie from "../share/widget-movie";
import { useGetMovies } from "./hooks";

import CircularProgress from "@mui/material/CircularProgress";
import DialogDetail from "../share/dialog-detail";

import { useSelector } from "react-redux";

export default function AppMain() {
  const { loading, error } = useGetMovies();
  const [open, setOpen] = React.useState(false);
  const moviesList = useSelector((state) => state.movies.moviesList);
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
        <DialogDetail open={open} setOpen={setOpen} />
      </Box>
      <Grid container spacing={3}>
        {moviesList.map((movie, index) => (
          <Grid key={index} xs={12} sm={6} md={3}>
            <WidgetMovie movie={movie} setOpen={setOpen} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
