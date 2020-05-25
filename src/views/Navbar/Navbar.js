import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        background: "linear-gradient( to right,#362e52,#1e3d52)",
        justifyContent: "flex-end"

    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Grid container direction="row" justify="flex-end" alignItems="center">
                        <Button color="inherit">Over mij</Button>
                        <Button color="inherit">Stage</Button>
                        <Button color="inherit">Projecten</Button>
                        </Grid>
             
                        
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default NavBar;
