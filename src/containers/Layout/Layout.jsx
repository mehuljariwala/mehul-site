import React from "react";
import { Container, Box } from "@material-ui/core";
import useStyles from "./LayoutStyles.jsx";

function MainLayout({ children }) {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
export default MainLayout;
