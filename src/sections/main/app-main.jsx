import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import React from 'react'

import WidgetMovie from './widget-movie';
import { useGetMovies } from './hooks';

export default function AppMain() {
  const { movies, loading, error } = useGetMovies();

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(movies); // Now inside the return statement

  return (
    <Container maxWidth="xl" >
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 
      </Typography>
      <Grid container spacing={3}>
        {/* Only render movies if movies is not undefined */}
        {movies &&
          movies.map((movie) => (
            <Grid xs={12} sm={6} md={3} key={movie.id}>
              <WidgetMovie
                title={movie.title_th} // Assuming movies have a title property
                // ... other props
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
