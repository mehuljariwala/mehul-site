import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    userSelect: "none",
    [theme.breakpoints.down("md")]: {
      "& .MuiTypography-body1": {
        fontSize: "1rem",
      },
    },
  },
}));

export { useStyles };
