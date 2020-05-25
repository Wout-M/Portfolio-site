import React, { Fragment } from "react";
import classes from "./Gradient.module.css";

const Stars = (props) => {
    return (
        <Fragment>
            <div className={classes.gradient} style={{height: props.totalHeight}}>
            <div className={classes.shape} style={{height: props.gradientHeight}}></div>
            </div>
        </Fragment>
    );
};

export default Stars;
