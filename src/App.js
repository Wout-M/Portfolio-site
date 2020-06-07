import React, { Fragment } from "react";
import Main from "./views/Main/Main";
import HeroImage from "./views/HeroImage/HeroImage";
import Footer from "./views/Footer/Footer";

function App() {
    return (
        <Fragment>
            <HeroImage
                title="Wout Mergaerts"
                subtitles={[
                    "Web Developer",
                    "Software Developer",
                    "AI Enthousiast",
                ]}
            />
            <Main />
            <Footer/>
        </Fragment>
    );
}

export default App;
