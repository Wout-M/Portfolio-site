import React, { Fragment, useState, useEffect /*, useRef*/ } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Fade from "react-reveal/Fade";

import Title from "../../components/Title/Title";
import About from "../About/About";
import Stage from "../Stage/Stage";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import wout from "../../assets/images/wout.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "100px",
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginBottom: "20px",
    },
    text: {
        maxWidth: "600px",
        paddingLeft: "10px",
        margin: "10px",
        borderLeft: "3px solid",
        borderImage: "linear-gradient(to top,  #593896 ,#0093c4)",
        borderImageSlice: "1",
    },
}));

const Main = () => {
    const [content, setContent] = useState(<About/>);
    const [showAbout, setShowAbout] = useState(false);
    const [showStage, setShowStage] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [fade, setFade] = useState(true);
    const classes = useStyles();
    const duration = 800;

    const changeContent = (c) => {
        setFade(false);
        setContent(c);
    };

    useEffect(() => {
        let timer = setTimeout(setFade(true), duration);

        switch (content.type.name) {
            case About.name:
                setShowAbout(true);
                setShowStage(false);
                setShowProjects(false);
                break;
            case Stage.name:
                setShowAbout(false);
                setShowStage(true);
                setShowProjects(false);
                break;
            case Projects.name:
                setShowAbout(false);
                setShowStage(false);
                setShowProjects(true);
                break;

            default:
                break;
        }

        clearTimeout(timer);
    }, [content]);

    return (
        <Fragment>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                className={classes.root}
            >
                <Avatar alt="Wout" className={classes.large} src={wout} />
                <Contact />
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                    direction="row"
                >
                    <Grid item>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="column"
                        >
                            <Title
                                line={showAbout}
                                clicked={() => changeContent(<About />)}
                            >
                                Over mij
                            </Title>
                            <Title
                                line={showStage}
                                clicked={() => changeContent(<Stage />)}
                            >
                                Stage
                            </Title>
                            <Title
                                line={showProjects}
                                clicked={() => changeContent(<Projects />)}
                            >
                                Realisaties
                            </Title>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.text} xs={12} sm={8}>
                        <Fade when={fade} duration={duration}>
                            {content}
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Main;
