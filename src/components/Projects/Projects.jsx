import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { useStyles } from "./ProjectsStyles";
import { listOfProjects } from "../../content/content";

const Projects = () => {
  const classes = useStyles();

  const onRedirect = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" gutterBottom>
        I completed the bunch of Projects, <br />
        some of project is private so i am not able to showcase any of them.
      </Typography>
      <Box>
        <Grid container justify="center">
          {listOfProjects.map((project) => (
            <Grid item>
              <Box className={classes.box}>
                <div className={classes.clientProject}>
                  {project.client_project && (
                    <span className={classes.clientProjectChip}>
                      Client Project
                    </span>
                  )}
                </div>
                <Box
                  className={classes.boxImg}
                  onClick={() => onRedirect(project.link)}
                >
                  <img src={project.img} alt="project1" />
                </Box>
                <Box className={classes.boxDesc}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.boxDescTitle}
                  >
                    {project.content}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.boxDescTitle}
                  >
                    {project.tech}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
