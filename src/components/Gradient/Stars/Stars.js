import React, { Fragment, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const starsAnimation = keyframes`
from {
    transform: translateY(-2000px);
}
to {
    transform: translateY(0px);
}
`;

const spawnStars = (amount) => {
    let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
        Math.random() * 2000
    )}px #888`;
    let i;
    for (i = 0; i < amount; i++) {
        value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
            Math.random() * 2000
        )}px #888`;
    }
    return value;
};

const smallStars = spawnStars(700);
const mediumStars = spawnStars(200);
const bigStars = spawnStars(100);

const Root = styled.div`
    z-index: -1;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: opacity 1s ease-in-out;
`;

const Small = styled.div`
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${smallStars};
    animation: ${starsAnimation} 50s linear infinite;

    &:after {
        content: " ";
        position: absolute;
        top: 2000px;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: ${smallStars};
    }
`;

const Medium = styled.div`
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${mediumStars};
    animation: ${starsAnimation} 100s linear infinite;

    &:after {
        content: " ";
        position: absolute;
        top: 2000px;
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: ${mediumStars};
    }
`;

const Big = styled.div`
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${bigStars};
    border-radius: 100%;
    animation: ${starsAnimation} 150s linear infinite;

    &:after {
        content: " ";
        position: absolute;
        top: 2000px;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: ${bigStars};
        border-radius: 100%;
    }
`;

const Stars = (props) => {
    useEffect(() => {
        spawnStars(700);
    }, []);

    return (
        <Fragment>
            <Root>
                <Small />
                <Medium />
                <Big />
            </Root>
        </Fragment>
    );
};

export default Stars;
