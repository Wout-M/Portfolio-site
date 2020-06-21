import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useTranslation } from "react-i18next";

import classes from "./PictureDialog.module.css";
import norway from "../../assets/images/norway.jpg";
import norway2 from "../../assets/images/norway2.jpg";
import norway3 from "../../assets/images/norway3.jpg";
import norway4 from "../../assets/images/norway4.jpg";

const pictures = [norway, norway2, norway3, norway4];

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

const PictureDialog = (props) => {
    const [imageIndex, setImageIndex] = useState(0);
    const { t } = useTranslation("pictureDialog");

    const previousContentHandler = () => {
        imageIndex === 0
            ? setImageIndex(pictures.length - 1)
            : setImageIndex((prevIndex) => (prevIndex - 1) % pictures.length);
    };

    const nextContentHandler = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

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
                    {t("norway")}
                </DialogTitle>

                <DialogContent dividers>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                        className={classes.root}
                    >
                        <Grid item xs={1}>
                            <IconButton
                                color="primary"
                                variant="contained"
                                onClick={previousContentHandler}
                            >
                                <ArrowBackIosIcon
                                    fontSize="large"
                                    className={classes.button}
                                />
                            </IconButton>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                direction="column"
                            >
                                <img
                                    src={pictures[imageIndex]}
                                    alt={"Norway"}
                                    className={classes.image}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                color="primary"
                                variant="contained"
                                onClick={nextContentHandler}
                            >
                                <ArrowForwardIosIcon
                                    fontSize="large"
                                    className={classes.button}
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PictureDialog;
