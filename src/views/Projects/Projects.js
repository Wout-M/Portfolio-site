import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: "left",
    },
}));

const Projects = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item className={classes.text}>
                <Typography variant="body2">
                    E
                </Typography>

            </Grid>
        </Fragment>
    );
};

export default Projects;
