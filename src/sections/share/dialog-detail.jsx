import * as React from "react";
import {
  Typography,
  Card,
  Grid,
  Chip,
  Stack,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useSelector } from "react-redux";
import { fDate } from "../../utils/format-time";

import ReactPlayer from "react-player";

export default function DialogDetail({ open, setOpen }) {
  const movieDetail = useSelector((state) => state.movies.movieDetail);
  const handleClose = () => {
    setOpen(false);
  };

  const renderImg = (
    <Card>
      <ReactPlayer
        width={"100%"}
        height="100%"
        url={movieDetail.tr_mp4}
        playing={false}
        muted={false}
        controls={true}
      />
    </Card>
  );

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Movies Detail </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Box
                component="img"
                alt={movieDetail.title_en}
                src={movieDetail.poster_url}
                sx={{
                  objectFit: "cover",
                  height: "320px",
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="subtitle2" mb={1}>
                  {`เข้าฉาย ${fDate(movieDetail.release_date)}`}
                </Typography>
                <Typography variant="h4" mb={1}>
                  {`${movieDetail.title_th} (${movieDetail.title_en})`}
                </Typography>
                <Typography variant="h6" mb={1}>
                  {`ผู้กำกับ : ${movieDetail.director}`}
                </Typography>
                <Typography mb={1}>{movieDetail.synopsis_th}</Typography>
                <Typography variant="subtitle2" mb={1}>
                  {`นักแสดงนำ : ${movieDetail.actor}`}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap={"wrap"}>
                  <Chip
                    label={movieDetail.genre}
                    size="small"
                    color="default"
                    style={{ marginBottom: "8px" }}
                  />
                  <Chip
                    label={`${movieDetail.duration} นาที`}
                    size="small"
                    color="default"
                    style={{ marginBottom: "8px" }}
                  />
                  <Chip
                    label={`${movieDetail.rating}`}
                    size="small"
                    color="default"
                    style={{ marginBottom: "8px" }}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>{renderImg}</Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
