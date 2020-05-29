import React, { Fragment, useEffect, useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import Fab from "@material-ui/core/Fab";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const ScrollButton = () => {
    const [show, setShow] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        setShow(true);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            prevScrollY.current = currentScrollY;

            if (currentScrollY === 0) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Fragment>
            <Fade bottom when={show} duration={300}>
                <Fab
                    style={{
                        color: "#fff",
                        background:
                            "linear-gradient(to bottom,#2b106a, #006cb7)",
                    }}
                    onClick={() => {
                        window.scrollTo({
                            top: document.getElementById("hero").clientHeight,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <ArrowDropDownIcon />
                </Fab>
            </Fade>
        </Fragment>
    );
};

export default ScrollButton;
