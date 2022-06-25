import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    background: "#0C111B",
    [theme.breakpoints.up("md")]: {
      background: "#000",
    },
  },

  movieName: {
    fontSize: "24px",
    fontFamily: "instaplay_regular",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      fontSize: "42px",
    },
  },
  ratingText: {
    fontSize: "16px",
    fontFamily: "instaplay_regular",
    color: "#fff",
    padding: "8px 0px",
  },
  descriptionText: {
    fontSize: "14px",
    fontFamily: "instaplay_regular",
    color: "#FFFFFFB2",
    padding: "8px 0px",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },
  timelineText: {
    fontSize: "14px",
    fontFamily: "instaplay_regular",
    color: "#fff",
    padding: "4px 0px",
  },
}));
