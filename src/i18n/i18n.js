import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    // we init with resources
    resources: {
        en: {
            about: {
                first: 
                `Hi, I'm Wout Mergaerts and I just graduated from the IT Factory of 
                Thomas More Kempen in Geel`,
                second:
                `From an early age I was interested in everything that had to do 
                with technology. I often went exploring to try new things, such as 
                coding mods in Java for the game Minecraft or tinkering with an 
                Arduino. This also brought me in contact with CoderDojo, where I 
                took classes for a couple years and also volunteered to teach for a 
                little bit. Eventually I ended up at the IT Factory in Geel where I 
                could further develop these interests in the various classes and 
                group projects.`,
                third:
                `In the penultimate semseter I also studied at the Western Norway 
                University of Applied Sciences. Here I got to see IT from a different 
                angle, got to know loads of new friends and I of course also took a 
                lot of <0>pictures</0>.`,
                fourth:
                `Outside of school I also do wall climbing and play piano sometimes.`,
                fifth: 
                `If you would like to have more information about my skills and experience, 
                you can find it in <0>my CV</0> or you can always send me an <1>email</1>`
            },
            titles: {
              about: "About",
              stage: "Internship",
              projects: "Projects"
            }
        },
        nl: {
            about: {
                first: 
                `Hallo, mijn naam is Wout Mergaerts en ik ben juist
                afgestudeerd aan de IT Factory van Thomas More Kempen in
                Geel.`,
                second: 
                `Van kleins af aan was ik al geïnteresseerd in alles wat met
                technologie te maken heeft. Daarbij ging ik vaak zelf op
                ontdekking om nieuwe dingen te leren, zoals bijvoorbeeld
                mods maken in Java voor het spel Minecraft of
                knutselen met een Arduino. Hierdoor kwam ik ook in contact
                met CoderDojo, waar ik enkele jaren les heb gevolgd en ook
                even als begeleider heb gewerkt. Uiteindelijk kwam ik
                terecht aan de IT Factory in Geel waar ik verder mijn
                interesses kon ontwikkelen in de verschillende lessen en
                groepsprojecten.`,
                third: 
                `In het voorlaatste semester heb ik ook aan de Western Norway 
                University of Applied Sciences gestudeerd. Hier heb ik IT ook 
                van een andere hoek leren bekijken, veel nieuwe mensen leren 
                kennen en natuurlijk ook veel <0>foto's</0> getrokken.`,
                fourth: 
                `Buiten mijn studies doe ik ook nog aan muurklimmen en speel
                ik ook soms wat piano.`,
                fifth: 
                `Indien u meer informatie wilt over mijn vaardigheden en
                werkervaring, kan u dat vinden in <0>mijn CV</0> of kan u mij 
                altijd een <1>e-mail</1> sturen.`
            },
            titles: {
              about: "Over mij",
              stage: "Stage",
              projects: "Realisaties"
            }
        },
    },
    fallbackLng: "nl",
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
