import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles((theme) => ({
    imagecontainer: {
        overflow:"hidden"
    },
    image: {
        margin: theme.spacing(2),
        maxHeight: theme.spacing(40),
        borderRadius: theme.spacing(2),
    },
}));

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


const ProjectDialog = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                onClose={props.closing}
                aria-labelledby="customized-dialog-title"
                open={props.open}
            >
                <DialogTitle
                    id="customized-dialog-title"
                    onClose={props.closing}
                >
                    {props.title}
                </DialogTitle>
                
                <DialogContent dividers>
                <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
            >
                <img
                    src={props.image}
                    alt={props.title}
                    className={classes.image}
                />
                </Grid>
                    {props.content.map((paragraph) => (
                        <Typography gutterBottom key={paragraph}>
                            {paragraph}
                        </Typography>
                    ))}
                    <br />
                    {props.links.map((link) => (
                        <Typography gutterBottom key={link.text}>
                            <Link href={link.url} target="_blank">
                                {link.text}
                            </Link>
                        </Typography>
                    ))}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProjectDialog;
