import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: { background: "#0C111B" },
  detailContainer: {
    height: `calc(100vh - 64px)`,
    background: theme.palette.primary.shadeGradient,
  },
  mobImg: {
    objectFit: "cover",
    height: "350px",
  },
  shadowColor: {
    backgroundImage: theme.palette.primary.shadeGradient,
  },
  webContent: {
    height: `calc(100vh - 64px)`,
    background: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "40px",
    paddingLeft: "40px",
  },
  goBackButton: {
    marginBottom: "20px",
  },
  goBackContainer: {
    position: "absolute",
    left: "5%",
    top: "13%",
  },
}));
