import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Hidden } from "@mui/material";
import { useStyles } from "./style";
import { config } from "../../config";
import { NetworkCall } from "../../networkcall";
import { NetWorkCallMethods } from "../../utils";
import { useParams, Link } from "react-router-dom";
import { DetailCard } from "../../components";
import { BackArrowIcon } from "../../assets";

const MovieDetail = (props) => {
  const classes = useStyles();
  const { id } = useParams();

  // States
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);

  // SideEffects
  useEffect(() => {
    setLoading(true);
    fetchData();
    // eslint-disable-next-line
  }, []);

  // Fetch Movie Details
  const fetchData = async () => {
    await NetworkCall(
      `${config.api_url}movie/${id}`,
      NetWorkCallMethods.get,
      {},
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.auth_token}`,
      }
    )
      .then((res) => {
        setLoading(false);

        res?.data && setMovieData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      {/* Loader */}
      {loading && (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          height="90vh"
        >
          <CircularProgress color="secondary" />
        </Grid>
      )}

      {/* Web View */}
      <Hidden mdDown>
        {movieData?.title && (
          <Grid
            container
            xs={12}
            className={classes.detailContainer}
            style={{
              backgroundImage: movieData?.backdrop_path
                ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieData?.backdrop_path})`
                : "",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          >
            <Grid item xs={3} className={classes.webContent}>
              <Link to="/" className={classes.goBackButton}>
                <BackArrowIcon />
              </Link>

              <DetailCard
                title={movieData?.title}
                description={movieData?.overview}
                rating={movieData?.vote_average}
                languages={movieData?.spoken_languages?.map(
                  (lang) => lang?.english_name
                )}
                releaseTime={movieData?.release_date}
              />
            </Grid>
            <Grid item xs={9} className={classes.shadowColor}></Grid>
          </Grid>
        )}
      </Hidden>

      {/* Mobile View */}
      <Hidden mdUp>
        {movieData?.title && (
          <Grid container xs={12} justifyContent={"center"}>
            <Grid item className={classes.goBackContainer}>
              <Link to="/" className={classes.goBackButton}>
                <BackArrowIcon />
              </Link>
            </Grid>

            {movieData?.backdrop_path && (
              <img
                src={
                  movieData?.backdrop_path
                    ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieData?.backdrop_path}`
                    : ""
                }
                alt="banner"
                loading="lazy"
                width="100%"
                className={classes.mobImg}
              />
            )}
            <Grid item xs={11} style={{ padding: "16px 0px" }}>
              <DetailCard
                title={movieData?.title}
                description={movieData?.overview}
                rating={movieData?.vote_average}
                languages={movieData?.spoken_languages?.map(
                  (lang) => lang?.english_name
                )}
                releaseTime={movieData?.release_date}
              />
            </Grid>
          </Grid>
        )}
      </Hidden>
    </div>
  );
};

export default MovieDetail;
