import React from "react";
import Typography from "@material-ui/core/Typography"

const Footer = () => {
    return (
        <Typography style={{textAlign: "center", marginBottom: "16px"}}>
            © {new Date().getFullYear()} Wout Mergaerts
        </Typography>
    )
}

export default Footer;