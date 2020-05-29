import React, { Fragment } from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import Stars from "./Stars/Stars";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    hero: {
        display: "inline-block",
        width: "100%",
        position: "relative",
        height: (props) => props.totalHeight,
    },
    bg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: (props) => props.starsHeight,
        background: "#2b5876",
        background: "-webkit-linear-gradient(to bottom,#4e4376,#2b5876)",
        background: "linear-gradient(to bottom,#2b106a,#006cb7)",
        zIndex: -1,
    },
    text: {
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
    },
    button: {
        textAlign: "center",
        position: "absolute",
        top: "90%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    wave: {
        textAlign: "center",
        position: "absolute",
        bottom: "0%",
        color: "white",
        width: "100%",
        height: "250px",
        overflow: "hidden",
    },
});

const Gradient = (props) => {
    const classes = useStyles(props);

    return (
        <Fragment>
            <div className={classes.hero} id="hero">
                <div className={classes.text}>{props.children}</div>

                <div className={classes.bg}>
                    <Stars />
                </div>
                <div className={classes.wave}>
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        style={{ height: "100%", width: "100%" }}
                    >
                        <path
                            fill="#fff"
                            fillOpacity="1"
                            d="M0.00,49.98 C141.92,177.13 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        ></path>
                    </svg>
                </div>
                <div className={classes.button}>
                    <ScrollButton />
                </div>
            </div>
        </Fragment>
    );
};

export default Gradient;

/*
 */
