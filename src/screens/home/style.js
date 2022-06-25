import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    paddingBottom : "30px"
   
  },
  contentPart: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0px",
    [theme.breakpoints.up("md")]: {
      padding: "24px 0px",
    },
  },
  trendingText: {
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
    fontSize: "18px",
    fontFamily: "instaplay_medium",
    color: theme.palette.primary.white,
  },
  sortButton: {
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
    fontFamily: "instaplay_regular",
    color: theme.palette.primary.white,
    textTransform: "none",
  },
  paginationGrid: {
    padding: "16px 0px",
  },
  paginationColor: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));
