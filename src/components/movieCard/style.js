import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  cardGrid: { background: "transparent", cursor: "pointer" },
  cardContainer: {
    background: theme.palette.primary.cardBackground,
    padding: "12px 20px",
    alignItems: "center",
  },
  headerText: {
    fontSize: "18px",
    fontFamily: "instaplay_regular",
    color: theme.palette.primary.white,
  },
  ratingText: {
    fontSize: "14px",
    fontFamily: "instaplay_regular",
    color: "#B3B3B3",
    paddingTop: "8px",
  },
  playButton: {
    background: `${theme.palette.primary.primaryGradient} !important`,
    padding: "14px",
  },
}));
