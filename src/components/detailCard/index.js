import React from "react";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./style";

export const DetailCard = ({
  title = "",
  rating = "",
  description = "",
  releaseTime = "",
  languages = "",
}) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container xs={12} className={classes.cardContainer}>
        <Grid item xs={12}>
          <Typography className={classes.movieName}>{title ?? ""}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.ratingText}>
            Rating : {(rating / 2).toFixed(2)}/5
          </Typography>
        </Grid>{" "}
        <Grid item xs={12}>
          <Typography className={classes.descriptionText}>
            {description ?? ""}
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <Typography className={classes.timelineText}>
              Release Date
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.timelineText}>
              {releaseTime.slice(0, 4)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <Typography className={classes.timelineText}>
              Orginal Language
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.timelineText}>
              {languages?.join(", ")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
