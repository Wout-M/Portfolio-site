import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useTranslation, Trans } from "react-i18next";

import classes from "./About.module.css";
import PictureDialog from "../PictureDialog/PictureDialog";
import cv from "../../assets/documents/Wout_Mergaerts_CV.pdf";

const About = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation("about");


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
                <Typography className={classes.text}>{t("first")}</Typography>
                <Typography className={classes.text}>{t("second")}</Typography>
                <Typography className={classes.text}>
                    <Trans
                        t={t}
                        i18nKey="third"
                        components={[
                            <Link
                                href="#"
                                onClick={(e) => openDialogHandler(e)}
                            ></Link>,
                        ]}
                    />
                </Typography>
                <Typography className={classes.text}>{t("fourth")}</Typography>
                <Typography>
                    <Trans
                        t={t}
                        i18nKey="fifth"
                        components={[
                            <Link href={cv} target="_blank"></Link>,
                            <Link
                                href="mailto:wout.mergaerts@telenet.be"
                                target="_blank"
                            ></Link>,
                        ]}
                    />
                </Typography>
            </Grid>
            <PictureDialog open={open} closing={closeDialogHandler} />
        </Fragment>
    );
};

export default About;
