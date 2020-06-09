import React, { Fragment, useEffect } from "react";
import Main from "./views/Main/Main";
import HeroImage from "./views/HeroImage/HeroImage";
import Footer from "./views/Footer/Footer";

function App() {
    useEffect(() => {
        console.log(
            `%c 
   _    _ _                           
  | |  | (_)                          
  | |__| |_ _ __ ___   ________   ___ 
  |  __  | | '__/ _ \\ |  _   _ \\ / _ \\
  | |  | | | | |  __/ | | | | | |  __/
  |_|  |_|_|_|  \\___| |_| |_| |_|\\___|
  `,
            "font-family:monospace; font-weight:bold"
        );
    }, []);

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
            <Footer />
        </Fragment>
    );
}

export default App;
