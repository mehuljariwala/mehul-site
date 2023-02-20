import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    color: "black",
    backgroundColor: "#24292f",
    boxShadow: "none",
    borderBottom: "1px solid whitesmoke",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  linkedInIcon: {
    fill: "white",
    height: 32,
    width: 32,
  },
  gitHubIcon: {
    fill: "white",
    height: 28,
    width: 28,
  },
  imgLogo: {
    borderRadius: "50%",
    border: "1px solid whitesmoke",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  listItem: {
    margin: "1rem",
  },
}));

const headerLinkStyles = makeStyles((theme) => ({
  link: {
    color: "black",
    marginRight: "1.5rem",
    textDecoration: "none",
    fontWeight: "500",
    borderBottom: "3px solid black",
    padding: 12,
    transition: "0.5s",
    [theme.breakpoints.down("md")]: {
      marginRight: 16,
    },
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
}));

export { headerLinkStyles, useStyles };
