import { makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "calc(100vh - 90px)",
    paddingTop: "2rem",
  },
  intro: {
    marginLeft: "0.8rem",
  },
  gridContainer: {
    width: "80%",
    marginLeft: "0.8rem",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
  menSvg: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  nameLabel: {
    fontSize: "8rem",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
  },
}));

const rowStyles = makeStyles((theme) => ({
  gridItem: {
    marginBottom: "1rem",
  },
  secondaryLabel: {
    marginLeft: "0.25rem",
  },
}));

const contactMeStyles = makeStyles((theme) => ({
  contactMeBox: {
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  contactMe: {
    color: blueGrey[900],
    padding: "1rem",
    border: "1px solid gray",
    background: "transparent",
    transition: "0.5s",
    fontWeight: "700",
    marginLeft: "0.8rem",
    borderRadius: "7px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: blueGrey[900],
      color: "white",
      border: "1px solid black",
    },
  },
}));

export { useStyles, rowStyles, contactMeStyles };
