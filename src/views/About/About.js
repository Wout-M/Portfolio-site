import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import classes from "./About.module.css"

const About = () => {
    return (
        <Fragment>
            <Grid item >
                <Typography className={classes.text} >
                    Hallo, mijn naam is Wout Mergaerts en momenteel ben ik een
                    laatstejaarsstudent aan de IT Factory van Thomas More Kempen
                    in Geel.
                </Typography>
                <Typography className={classes.text}>
                    Van kleins af aan was ik al geïnteresseerd in alles wat met
                    technologie te maken heeft. Daarbij ging ik vaak zelf op
                    ontdekking om nieuwe dingen te leren, zoals bijvoorbeeld
                    knutselen met een Arduino of programma’s maken in Java.
                    Hierdoor kwam ik ook in contact met CoderDojo, waar ik
                    enkele jaren les heb gevolgd en ook even als begeleider heb
                    gewerkt. Uiteindelijk kwam ik terecht aan de IT Factory in
                    Geel waar ik verder mijn interesses kon ontwikkelen in de
                    verschillende lessen en groepsprojecten. Hier leerde ik om
                    meer gestructureerd te werken en de leerstof ook in
                    verschillende projecten toe te passen.
                </Typography>
            </Grid>
        </Fragment>
    );
};

export default About;
