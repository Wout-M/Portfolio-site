import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link, List, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: "left",
    },
}));

const Stage = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item className={classes.text}>
                <Typography variant="body2">
                    13 weken lang, waarvan 11 weken van thuis uit, heb ik
                    tijdens het laatste semester van mijn opleiding stage
                    gevolgd bij Brainjar. Brainjar is een bedrijf dat onderdeel
                    is van de Raccoons Group en zich vooral bezighoudt met AI as
                    a service. Hierbij maken ze end-to-end applicaties met AI op
                    maat voor bedrijven. Eén van hun motto’s hierbij is de
                    “human in the loop” waar bij de belangrijkste beslissing van
                    de applicatie nog steeds een mens betrokken wordt.
                    Daarbuiten doen zij ook onderzoek naar de verschillende
                    mogelijkheden en limieten van AI en de toepassingen die
                    hiermee gemaakt kunnen worden.
                </Typography>
                <br />
                <Typography variant="body2">
                    Eén van deze onderzoeken is mijn stage, waarbij ik
                    onderzocht hoe je een objectieve jury kan maken voor een
                    specifieke sport door middel van AI. Hierbij heb ik eerst
                    onderzoek gedaan naar de verschillende Pose Estimation
                    modellen en de voor- en nadelen hiervan om de sporters in
                    beeld te kunnen brengen voor verdere analyse. DeepLabCut
                    kwam hier als beste kandidaat uit.
                </Typography>
                <br />
                <Typography variant="body2">
                    Vervolgens heb ik onderzoek gedaan naar het verbeteren van
                    dit model door bijvoorbeeld post-processing van de data.
                    Hierbij worden fouten die door het model gemaakt zijn uit de
                    data gehaald en aangepast. Ook heb ik een webapplicatie
                    gebouwd waarbij de klant zelf video’s kon laten analyseren
                    door het model.
                </Typography>
                <br />
                <Typography variant="body2">
                    Ten slotte heb ik onderzoek gedaan naar de mogelijkheid om
                    een score te geven aan één specifieke oefening door middel
                    van een AI model dat de eerder genoemde data analyseert.
                </Typography>
                <br />
                <Typography variant="body2">
                    Hieronder vindt u de documenten die ik in het kader van mijn
                    stage heb gemaakt en die dieper ingaan op bepaalde aspecten
                    hiervan:
                </Typography>
                <List>
                    <ListItem>
                        <Link href={""} download>
                            Plan van aanpak
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={""} download>
                            Research
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={""} download>
                            Werking
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={""} download>
                            Reflectie
                        </Link>
                    </ListItem>
                </List>
            </Grid>
        </Fragment>
    );
};

export default Stage;
