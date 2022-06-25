import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardMedia,
  Tooltip,
} from "@mui/material";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { PolyGenIcon, StarIcon } from "../../assets";

export const MovieCard = ({
  imgUrl = "",
  title = "",
  rating = "",
  id = "",
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card
      className={classes.cardGrid}
      onClick={() => navigate(`/movie/${id}`)}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${imgUrl}`}
        alt="movieImages"
        loading="lazy"
        height="160px"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
        }}
      />
      {/* <CardContent > */}
      <Grid
        container
        xs={12}
        justifyContent="space-between"
        className={classes.cardContainer}
      >
        <Grid item xs={10}>
          <Tooltip title={title}>
            <Typography className={classes.headerText}>
              {title?.length > 25 ? `${title.slice(0, 25)}...` : title}
            </Typography>
          </Tooltip>

          <Typography className={classes.ratingText}>
            <StarIcon />
            &nbsp; {rating / 2} / 5
          </Typography>
        </Grid>
        <Grid item xs={2} style={{display : "flex", justifyContent : "flex-end"}}>
          <IconButton component="span" className={classes.playButton}>
            <PolyGenIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};
