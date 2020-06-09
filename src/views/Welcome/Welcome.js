import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import classes from "./Welcome.module.css";
import Link from "@material-ui/core/Link";

import About from "../About/About";
import Stage from "../Stage/Stage";
import Projects from "../Projects/Projects";

const Welcome = (props) => {
    const linkHandler = (event, tab) => {
        event.preventDefault();
        props.switchTab(tab);
    };

    return (
        <Fragment>
            <Grid item>
                <Typography className={classes.text}>
                    Welkom op mijn portfolio! Na 3 jaar les te hebben gevolgd
                    aan de IT Factory, waarvan ook een semester in Noorwegen, is
                    het tijd om deze kennis en interesse toe te passen in een
                    echte job. Op deze site kan u mijn belangrijkste realisaties
                    die ik gemaakt heb tijdens mijn studies vinden.
                </Typography>
                <Typography className={classes.text}>
                    In het gedeelte{" "}
                    <Link
                        href="#"
                        onClick={(event) => linkHandler(event, <About />)}
                    >
                        Over mij
                    </Link>{" "}
                    kan u meer informatie vinden over wie ik ben als persoon en
                    hoe mijn interesses in technologie mij tot dit punt hebben
                    gebracht. Indien u meer informatie wilt over mijn
                    vaardigheden en werkervaring, kan u dat vinden in mijn CV
                    hierboven.
                </Typography>
                <Typography className={classes.text}>
                    Verder heb ik het ook over mijn stage bij Brainjar die ik
                    volbracht heb tijdens het laatste semester van mijn studies.
                    Meer informatie hierover is te vinden in het{" "}
                    <Link
                        href="#"
                        onClick={(event) => linkHandler(event, <Stage />)}
                    >
                        Stage
                    </Link>{" "}
                    gedeelte.
                </Typography>
                <Typography>
                    Ten slotte zijn enkele van mijn belangrijkste projecten die
                    ik voor school of voor andere doeleinden heb gemaakt te
                    vinden bij{" "}
                    <Link
                        href="#"
                        onClick={(event) => linkHandler(event, <Projects />)}
                    >
                        Realisaties
                    </Link>
                    .
                </Typography>
            </Grid>
        </Fragment>
    );
};

export default Welcome;
