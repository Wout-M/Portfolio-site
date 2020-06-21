import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";

const LanguageChanger = () => {
    const { t,i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <FormControl>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="row"
            >
                <Grid item>
                    <Typography>{t("language")}</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "4px" }}>
                    <NativeSelect onChange={handleChange} name="age">
                        <option value="nl">NL</option>
                        <option value="en">EN</option>
                    </NativeSelect>
                </Grid>
            </Grid>
        </FormControl>
    );
};

export default LanguageChanger;
