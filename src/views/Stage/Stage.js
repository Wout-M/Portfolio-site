import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useTranslation } from "react-i18next";

import classes from "./Stage.module.css";
import pva from "../../assets/documents/PVA.pdf";
import research from "../../assets/documents/Research_stage.pdf";
import werking from "../../assets/documents/Werking.pdf";
import reflectie from "../../assets/documents/Reflectie_stage.pdf";

const Stage = () => {
    const { t } = useTranslation("stage");
    return (
        <Fragment>
            <Grid item>
                <Typography variant="h5" gutterBottom>
                    {t("title")}
                </Typography>

                <Fragment>
                {t("paragraphs", {returnObjects: true}).map((paragraph, i) => 
                    <Typography className={classes.text} key={i}>
                        {paragraph}
                    </Typography>)}
                </Fragment>
                
                <List style={{ marginLeft: "-16px" }}>
                    <ListItem>
                        <Link href={pva} target="_blank">
                            {t('pva')}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={research} target="_blank">
                            {t('r1')}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={werking} target="_blank">
                            {t('r2')}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={reflectie} target="_blank">
                            {t('reflect')}
                        </Link>
                    </ListItem>
                </List>
            </Grid>
        </Fragment>
    );
};

export default Stage;
