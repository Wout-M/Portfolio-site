import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

import classes from "./ProjectDialog.module.css";

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

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, categories, ...other } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography gutterBottom variant="h6">
                {children}
            </Typography>
            {categories.map((category, i) => (
                <Chip
                    label={category}
                    key={i}
                    style={{ marginRight: "10px" }}
                />
            ))}

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
                    categories={props.content.categories}
                >
                    {props.content.title}
                </DialogTitle>

                <DialogContent dividers>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        <img
                            src={props.content.image}
                            alt={props.content.title}
                            className={classes.image}
                        />
                    </Grid>

                    {props.content.text.map((paragraph, i) => (
                        <Fragment key={i}>
                            <Typography key={paragraph}>{paragraph}</Typography>
                            <br />
                        </Fragment>
                    ))}
                    {props.content.technologies ? (
                        <Fragment>
                            <Typography variant="h6" gutterBottom>
                                Gebruikte technologieën
                            </Typography>
                            <ul className={classes.list}>
                                {props.content.technologies.map((tech, i) => (
                                    <li key={i}>
                                        <Typography gutterBottom>
                                            {tech}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Fragment>
                    ) : null}

                    <Typography variant="h6" gutterBottom>
                        Links
                    </Typography>

                    <ul className={classes.list}>
                        {props.content.links.map((link, i) => (
                            <li key={i}>
                                <Typography gutterBottom>
                                    <Link href={link.url} target="_blank">
                                        {link.text}
                                    </Link>
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProjectDialog;
