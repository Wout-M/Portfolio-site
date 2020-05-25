import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    title : {
        display: "inline-block",
        marginBottom: "8px"
    },
    text: {
        paddingBottom: "4px"
    },
    line: {
        height: "3px",
        width: "100%",
        background: "linear-gradient(to right, #8173aa ,#00a1a1)"
    }
});

const Title = (props) => {
    const classes = useStyles();

    return (
        <Button className={classes.title} onClick={props.clicked}>
            <Typography variant="h5" component="h2" className={classes.text}>
                {props.children}
            </Typography>
            <div className={classes.line} style={props.line ? {display : "block"} : {display: "none"}}></div>
        </Button>
    );
};

export default Title;
