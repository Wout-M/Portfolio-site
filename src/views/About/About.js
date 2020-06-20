import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import classes from "./About.module.css";
import PictureDialog from "../PictureDialog/PictureDialog";
import cv from "../../assets/documents/Wout_Mergaerts_CV.pdf";

const About = () => {
    const [open, setOpen] = useState(false);

    const openDialogHandler = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const closeDialogHandler = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Grid item>
                <Typography className={classes.text}>
                    Hallo, mijn naam is Wout Mergaerts en ik ben juist
                    afgestudeerd aan de IT Factory van Thomas More Kempen in
                    Geel.
                </Typography>
                <Typography className={classes.text}>
                    Van kleins af aan was ik al geïnteresseerd in alles wat met
                    technologie te maken heeft. Daarbij ging ik vaak zelf op
                    ontdekking om nieuwe dingen te leren, zoals bijvoorbeeld
                    programma’s maken in Java voor het spel Minecraft of
                    knutselen met een Arduino. Hierdoor kwam ik ook in contact
                    met CoderDojo, waar ik enkele jaren les heb gevolgd en ook
                    even als begeleider heb gewerkt. Uiteindelijk kwam ik
                    terecht aan de IT Factory in Geel waar ik verder mijn
                    interesses kon ontwikkelen in de verschillende lessen en
                    groepsprojecten.
                </Typography>
                <Typography className={classes.text}>
                    In het eerste semester van dit laatste jaar heb ik ook aan
                    de Western Norway University of Applied Sciences gestudeerd.
                    Hier heb ik IT ook van een andere hoek leren bekijken, veel
                    nieuwe mensen leren kennen en natuurlijk ook veel{" "}
                    <Link href="#" onClick={(e) => openDialogHandler(e)}>
                        foto's
                    </Link>{" "}
                    getrokken.
                </Typography>
                <Typography className={classes.text}>
                    Buiten mijn studies doe ik ook nog aan muurklimmen en speel
                    ik ook soms wat piano.
                </Typography>
                <Typography>
                    Indien u meer informatie wilt over mijn vaardigheden en
                    werkervaring, kan u dat vinden in{" "}
                    <Link href={cv} target="_blank">
                        mijn CV
                    </Link>{" "}
                    of kan u mij altijd een{" "}
                    <Link
                        href="mailto:wout.mergaerts@telenet.be"
                        target="_blank"
                    >
                        e-mail
                    </Link>{" "}
                    sturen.
                </Typography>
            </Grid>
            <PictureDialog open={open} closing={closeDialogHandler} />
        </Fragment>
    );
};

export default About;
