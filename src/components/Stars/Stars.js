import React, { Fragment } from "react";
import "./Stars.scss";
import ScrollButton from "../ScrollButton/ScrollButton";

const Stars = (props) => {
    return (
        <Fragment>
            <div
                className="hero"
                id="hero"
                style={{ height: props.totalHeight }}
            >
                <div className="hero-text">{props.children}</div>

                <div
                    className="diagonal-hero-bg"
                    style={{ height: props.starsHeight }}
                >
                    <div className="stars">
                        <div className="small"></div>
                        <div className="medium"></div>
                        <div className="big"></div>
                    </div>
                </div>

                <div className="wave">
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        style={{ height: "100%", width: "100%" }}
                    >
                        <path
                            fill="#fff"
                            fillOpacity="1"
                            d="M0.00,49.98 C141.92,177.13 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        ></path>
                    </svg>
                </div>
                <div className="hero-button">
                    <ScrollButton />
                </div>
            </div>
        </Fragment>
    );
};

export default Stars;

/*
 */
