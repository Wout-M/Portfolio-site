import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const LanguageChanger = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Fragment>
            <Button onClick={() => changeLanguage("nl")}>nl</Button>
            <Button onClick={() => changeLanguage("en")}>en</Button>
        </Fragment>
    );
};

export default LanguageChanger;
