import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  searchBarGrid: {
    boxShadow: "none",
    height: "100%",
    background: theme.palette.primary.background,
    border: `1px solid ${theme.palette.primary.background}`,
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  inputText: {
    color: theme.palette.primary.white,
  },
  buttonstyle: {
    background: theme.palette.primary.primaryGradient,
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    marginLeft: "auto",
  },
}));
