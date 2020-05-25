import React, { Fragment, useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../components/Title/Title";
import About from "../About/About";
import Stage from "../Stage/Stage";
import Projects from "../Projects/Projects";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Contact from "../Contact/Contact"
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginBottom: "20px"
    },
    text: {
        maxWidth: "600px",
        paddingLeft: "10px",
        margin: "10px",
        borderLeft: "2px solid",
        borderImage: "linear-gradient(to top, #8173aa ,#00a1a1)",
        borderImageSlice: "1",
    },
}));

const Main = () => {
    const [content, setContent] = useState(<About />);
    const [showAbout, setShowAbout] = useState(true);
    const [showStage, setShowStage] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [fade, setFade] = useState(true);
    const classes = useStyles();

    const changeContent = (c) => {
    } 

    useEffect(() => {
            console.log(fade)
            //if(!fade)
    }, [fade])

    useEffect(() =>{
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
    }, [content])

    return (
        <Fragment>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
            >
                <Avatar
                    alt="Wout"
                    className={classes.large}
                    src="https://pbs.twimg.com/profile_images/1046875175277465600/pZ3CtYFX_400x400.jpg"
                />
                <Contact/>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                    direction="row"
                >
                    <Grid item >
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="column"
                        >
                            <Title
                                line={showAbout}
                                clicked={() => setContent(<About />)}
                            >
                                Over mij
                            </Title>
                            <Title
                                line={showStage}
                                clicked={() => setContent(<Stage />)}
                            >
                                Stage
                            </Title>
                            <Title
                                line={showProjects}
                                clicked={() => setContent(<Projects />)}
                            >
                                Realisaties
                            </Title>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.text} xs="12" sm="8">
                        {content}
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Main;
