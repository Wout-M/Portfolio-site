import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import classes from "./Stage.module.css";
import pva from "../../assets/documents/PVA.pdf";
import research from "../../assets/documents/Research_stage.pdf";
import werking from "../../assets/documents/Werking.pdf";
import reflectie from "../../assets/documents/Reflectie_stage.pdf";

const Stage = () => {
    return (
        <Fragment>
            <Grid item>
                <Typography variant="h5" gutterBottom>
                    Objectieve puntentelling in sport
                </Typography>
                <Typography className={classes.text}>
                    Tijdens mijn Erasmussemester heb ik kennisgemaakt met AI en
                    Machine Learning en was ik er direct zeer geïnteresseerd in.
                    Hierdoor heb ik 13 weken lang, waarvan 11 weken van thuis
                    uit, tijdens het laatste semester van mijn opleiding stage
                    gevolgd bij Brainjar. Brainjar is een bedrijf dat onderdeel
                    is van de Raccoons Group en zich vooral bezighoudt met “AI
                    as a service”. Dit betekent dat ze end-to-end applicaties
                    met AI op maat maken voor bedrijven. Eén van hun motto’s
                    hierbij is de “human in the loop” waar bij de belangrijkste
                    beslissing van de applicatie nog steeds een mens betrokken
                    wordt. Daarbuiten doen zij ook onderzoek naar de
                    verschillende mogelijkheden en limieten van AI en de
                    toepassingen die hiermee gemaakt kunnen worden.
                </Typography>
                <Typography className={classes.text}>
                    Eén van deze onderzoeken is mijn stage, waarbij ik
                    onderzocht hoe je het jureren van een specifieke sport kan
                    objectiveren door middel van AI. Hierbij heb ik eerst
                    onderzoek gedaan naar de verschillende Pose Estimation
                    modellen en de voor- en nadelen hiervan om de sporters in
                    beeld te kunnen brengen voor verdere analyse. DeepLabCut
                    kwam hier als beste kandidaat uit.
                </Typography>
                <Typography className={classes.text}>
                    Vervolgens heb ik onderzoek gedaan naar het verbeteren van
                    dit model door bijvoorbeeld post-processing van de data.
                    Hierbij worden fouten die door het model gemaakt zijn uit de
                    data gehaald en aangepast. Ook heb ik een webapplicatie
                    gebouwd waarbij de klant zelf video’s kan laten analyseren
                    door het model.
                </Typography>
                <Typography className={classes.text}>
                    Ten slotte heb ik onderzoek gedaan naar de mogelijkheid om
                    een score te geven aan één specifieke oefening door middel
                    van een AI model dat de eerder genoemde data analyseert.
                </Typography>
                <Typography>
                    Hieronder vindt u de documenten die ik in het kader van mijn
                    stage heb gemaakt en die dieper ingaan op bepaalde aspecten
                    hiervan, maar door een Non-Disclosure Agreement kan ik
                    helaas geen code of concrete voorbeelden gebruiken.
                </Typography>
                <List style={{ marginLeft: "-16px" }}>
                    <ListItem>
                        <Link href={pva} target="_blank">
                            Plan van aanpak
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={research} target="_blank">
                            Realistatie 1: Research
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={werking} target="_blank">
                            Realisatie 2: Werking
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={reflectie} target="_blank">
                            Reflectie
                        </Link>
                    </ListItem>
                </List>
            </Grid>
        </Fragment>
    );
};

export default Stage;
