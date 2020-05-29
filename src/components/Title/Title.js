import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classes from "./Title.module.css"

const Title = (props) => {
    return (
        <Button style={{display: "inline-block", marginBottom: "8px"}} onClick={props.clicked}>
            <Typography variant="h5" component="h2" className={classes.text}>
                {props.children}
            </Typography>
            <div className={classes.line} style={props.line ? {display : "block"} : {display: "none"}}></div>

        </Button>
    );
};

export default Title;
