import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Button,
  Menu,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { useStyles } from "./style";
import { config } from "../../config";
import { MovieCard } from "../../components";
import { NetworkCall } from "../../networkcall";
import { NetWorkCallMethods } from "../../utils";
import BannerImg from "../../assets/img/header.jpg";
import { SortIcon, DownArrowIcon } from "../../assets";
import { SearchContext } from "../../contexts/searchContext";

const Home = (props) => {
  const classes = useStyles();
  const { searchText } = React.useContext(SearchContext);

  // States
  const [movieData, setMovieData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(false);
  const open = Boolean(anchorEl);

  // SideEffects
  useEffect(() => {
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (searchText?.length > 0) {
      SearchMovieList();
    } else {
      GetMovieList();
    }
    // eslint-disable-next-line
  }, [page, searchText]);

  // Fetch Functions
  // Get all movie list
  const GetMovieList = async () => {
    await NetworkCall(
      `${config.api_url}movie/popular?page=${page ?? 1}`,
      NetWorkCallMethods.get,
      {},
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.auth_token}`,
      }
    )
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
          setMovieData(res?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Get search movie list
  const SearchMovieList = async () => {
    await NetworkCall(
      `${config.api_url}search/movie?query=${searchText}`,
      NetWorkCallMethods.get,
      {},
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.auth_token}`,
      }
    )
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
          setMovieData(res?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className={classes.root}>
      <Grid container>
        {/* Banner Image */}
        <Grid item xs={12}>
          <img src={BannerImg} width="100%" height="100%" alt="banner" />
        </Grid>
        {/* Sort Button */}
        <Grid container xs={11} style={{ margin: "auto" }}>
          <Grid item xs={12} className={classes.contentPart}>
            <Typography className={classes.trendingText}>Trending</Typography>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={classes.sortButton}
              >
                <SortIcon /> &nbsp; Sort By Ratings&nbsp; <DownArrowIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setPage(1);
                    handleClose();
                  }}
                >
                  High to Low
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setPage(100);
                    handleClose();
                  }}
                >
                  Low to High
                </MenuItem>
              </Menu>
            </div>
          </Grid>

          {/* Loader */}
          {loading && (
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              height="50vh"
            >
              <CircularProgress color="secondary" />
            </Grid>
          )}

          {/* Movie Cards */}
          <Grid
            container
            xs={12}
            rowGap={{ xs: 2, sm: 2, md: 3 }}
            columnSpacing={{ xs: 0, sm: 0, md: 3 }}
          >
            {!loading &&
              movieData?.results?.map((val) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={3}
                  key={val?.id}
                  className={classes.cardContainer}
                >
                  <MovieCard
                    imgUrl={val?.backdrop_path}
                    id={val?.id}
                    title={val?.title}
                    rating={val?.vote_average}
                  />
                </Grid>
              ))}
          </Grid>

          {/* Paginations */}
          <Grid
            container
            xs={12}
            justifyContent="center"
            className={classes.paginationGrid}
          >
            {!loading && (
              <Pagination
                count={
                  movieData?.total_pages < 500 ? movieData?.total_pages : 500
                }
                page={page}
                onChange={handlePageChange}
                color="secondary"
                classes={{ ul: classes.paginationColor }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
