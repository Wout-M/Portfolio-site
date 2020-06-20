import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    // we init with resources
    resources: {
        en: {
            translations: {
                about: "Let's test i18next",
            },
        },
        nl: {
            translations: {
                about: "Laten we i18next testen",
            },
        },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
