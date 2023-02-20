import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// import Logo from "../../assets/img/logo250.png";
import { Link } from "react-router-dom";
import PdfFile from "../../assets/resume.pdf";
import { useStyles } from "./HeaderStyles.jsx";
import { Box, Typography } from "@material-ui/core";

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.grow}>
      <AppBar position="static" elevation={1} className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <Box className={classes.grow}>
              {/* <Typography style={{ fontSize: "2rem" }}>H</Typography> */}
              {/* <img height="80px" src={Logo} alt="logo" /> */}
            </Box>
            <Box className={classes.sectionDesktop}>
              <IconButton aria-label="delete">
                <Link
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/mehul-jariwala-352a01132/",
                  }}
                  target="_blank"
                >
                  <LinkedInIcon className={classes.linkedInIcon} />
                </Link>
              </IconButton>
              <IconButton aria-label="delete">
                <Link
                  target="_blank"
                  to={{ pathname: "https://github.com/mehuljariwala" }}
                >
                  <GitHubIcon className={classes.gitHubIcon} />
                </Link>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
