import React, { Fragment } from "react";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import { GitHub, LinkedIn, Email, AccountBox } from "@material-ui/icons";

const Contact = () => {
    return (
        <Fragment>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
            >
                <Grid item>
                    <Tooltip title="Github" placement="top">
                        <Link href="https://github.com/Wout-M" target="_blank">
                            <IconButton aria-label="Github">
                                <GitHub color="inherit" fontSize="large" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="LinkedIn" placement="top">
                        <Link
                            href="https://www.linkedin.com/in/wout-mergaerts/"
                            target="_blank"
                        >
                            <IconButton aria-label="LinkedIn">
                                <LinkedIn color="inherit" fontSize="large" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="E-mail" placement="top">
                    <Link
                            href="mailto:wout.mergaerts@telenet.be"
                            target="_blank"
                        >
                        <IconButton aria-label="E-mail">
                            <Email color="inherit" fontSize="large" />
                        </IconButton>
                        </Link>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="CV" placement="top">
                        <IconButton aria-label="CV">
                            <AccountBox color="inherit" fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Contact;
