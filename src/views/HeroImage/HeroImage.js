import React, { Fragment, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Typography from "@material-ui/core/Typography";
import Stars from "../../components/Stars/Stars";

const HeroImage = (props) => {
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const [reveal, setReveal] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setReveal(false);
            setSubtitleIndex(
                (prevIndex) => (prevIndex + 1) % props.subtitles.length
            );
            setReveal(true);
        }, 3000);
        return () => clearInterval(interval);
    }, [props.subtitles.length]);

    return (
        <Fragment >
            <Stars  totalHeight="100vh" starsHeight="90vh">
                <Fade top cascade>
                    <Typography variant="h2" component="h1">
                        {props.title}
                    </Typography>
                </Fade>
                <Fade when={reveal}>
                    <Typography variant="subtitle1">
                        {props.subtitles[subtitleIndex]}
                    </Typography>
                </Fade>
            </Stars>
        </Fragment>
    );
};

export default HeroImage;
