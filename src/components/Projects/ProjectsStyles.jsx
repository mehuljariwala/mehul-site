import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: "0 6px 10px 0 rgba(134,159,253,0.23)",
    borderRadius: "5px",
    background: "#F7F9FD",
    width: 300,
    height: "auto",
    margin: theme.spacing(2),
  },
  boxImg: {
    height: 207,
    textAlign: "center",
    cursor: "pointer",
    "& > img": {
      height: "200px",
      margin: theme.spacing(1.5, 3),
    },
  },
  boxDesc: {
    background: "white",
    height: 66,
    zIndex: 9,
    position: "relative",
  },
  boxDescTitle: {
    fontWeight: 500,
    padding: theme.spacing(1),
  },
  clientProject: {
    textAlign: "right",
  },
  clientProjectChip: {
    background: "antiquewhite",
    padding: theme.spacing(0.5),
    borderBottomLeftRadius: "14px",
    fontWeight: 500,
  },
}));

export { useStyles };
