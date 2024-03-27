import { useState } from "react";
import PropTypes from "prop-types";
import { Chip, Box, Card, Stack, Typography } from "@mui/material";
import Iconify from "../../components/iconify";
import { fDate } from "../../utils/format-time";
import { Button } from "@mui/material";
import { saveMovieId, saveToFev } from "../../store/moviesSlice";

import { useDispatch, useSelector } from "react-redux";

export default function WingetMovie({ movie, setOpen, useFevIcon = false }) {
  const dispatch = useDispatch();
  const isFev = useSelector((state) => state.movies.fevList);
  const [fev, setFev] = useState(isFev.some((item) => item === movie.id));
  const [isHovered, setIsHovered] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    dispatch(saveMovieId({ movie: movie }));
  };

  const renderFevIcon = (
    <Iconify
      icon="mdi:favorite"
      sx={{
        mr: 0.5,
        width: 32,
        height: 32,
        zIndex: 9,
        top: 16,
        right: 16,
        position: "absolute",
        color: !fev ? "white" : "#ee11a8",
        cursor: "pointer",
      }}
      onClick={() => {
        setFev(!fev);
        dispatch(saveToFev({ movieId: movie.id }));
      }}
    />
  );
  const renderImg = (
    <Box
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${movie?.poster_url})`,
          objectFit: "cover",
          backgroundSize: "cover",
          filter: !!isHovered ? "brightness(0.5)" : "none",
          transition: "filter 0.5s ease-in-out",
          width: "100%",
          height: "440px",
        }}
      >
        {!!isHovered && (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            sx={{
              filter: "brightness(1)",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              ดูรายละเอียดเพิ่มเติม
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );

  const renderDesc = (
    <Box display={"flex"} flexDirection="column" alignItems={"flex-start"}>
      <Typography variant="h6" display={"flex"} textAlign={"left"} height={56}>
        {movie?.title_th}
      </Typography>
      <Typography underline="hover" variant="subtitle2" mb={1}>
        {fDate(movie.release_date)}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap={"wrap"}>
        <Chip
          label={movie.genre}
          size="small"
          color="default"
          style={{ marginBottom: "8px" }}
        />
        <Chip
          label={`${movie.duration} นาที`}
          size="small"
          color="default"
          style={{ marginBottom: "8px" }}
        />
      </Stack>
    </Box>
  );

  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        {!useFevIcon && renderFevIcon}
        {renderImg}
      </Box>
      <Stack spacing={2} sx={{ p: 2 }}>
        {renderDesc}
      </Stack>
    </Card>
  );
}

WingetMovie.propTypes = {
  movie: PropTypes.object,
};
