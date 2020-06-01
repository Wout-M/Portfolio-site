import React, { Fragment } from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import Stars from "./Stars/Stars";

import classes from "./Gradient.module.css"

const Gradient = (props) => {
    return (
        <Fragment>
            <div className={classes.hero} id="hero" style={{height: props.totalHeight}}>
                <div className={classes.text}>{props.children}</div>

                <div className={classes.bg} style={{height: props.gradientHeight}}>
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
