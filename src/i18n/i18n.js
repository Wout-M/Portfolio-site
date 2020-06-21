import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {tileData, tileDataEnglish} from "./projectData";


i18n.use(initReactI18next).init({
    // we init with resources
    resources: {
        en: {
            titles: {
                about: "About",
                stage: "Internship",
                projects: "Projects",
                language: "Language: "
            },
            about: {
                first: `Hi, I'm Wout Mergaerts and I just graduated from the IT Factory of 
                Thomas More Kempen in Geel`,
                second: `From an early age I was interested in everything that had to do 
                with technology. I often went exploring to try new things, such as 
                coding mods in Java for the game Minecraft or tinkering with an 
                Arduino. This also brought me in contact with CoderDojo, where I 
                took classes for a couple years and also volunteered to teach for a 
                little bit. Eventually I ended up at the IT Factory in Geel where I 
                could further develop these interests in the various classes and 
                group projects.`,
                third: `In the penultimate semseter I also studied at the Western Norway 
                University of Applied Sciences. Here I got to see IT from a different 
                angle, got to know loads of new friends and I of course also took a 
                lot of <0>pictures</0>.`,
                fourth: `Outside of school I also do wall climbing and play piano sometimes.`,
                fifth: `If you would like to have more information about my skills and experience, 
                you can find it in <0>my CV</0> or you can always send me an <1>email</1>`,
            },
            stage: {
                title: `Objective scoring in sports`,
                paragraphs: [
                    `During my Erasmus semester I discovered the world of AI and 
                    Machine Learining and I was immediately very interested in it. 
                    Because of this I went to do my internship at Brainjar for 13 weeks, 
                    of which 11 weeks from home, during the last semester of my education. 
                    Brainjar is a company that is part of the Raccoons Group and mainly focuses 
                    on "AI as a service". This means that they make custom 
                    end-to-end applications with AI for companies. One of their mottos is 
                    "human in the loop" where the most important decision of these 
                    applications still involve a human being. In addition, they also conduct 
                    research into the various possibilities and limits of AI and the 
                    applications that can be made with it.`,
                    `One of these researches is my internship, in which I investigated how 
                    you could objectify the judging and scoring of a specific sport by using an 
                    AI. I first reasearched the different Pose Estimation models and their pros 
                    and cons for visualizing the athletes for further analysis.`,
                    `I then did research on improving this Pose Estimation model by, for example, 
                    post-processing the generated data. This means that errors made by the model 
                    will be removed from the data and replaced with adjusted values. I also built 
                    a web application that the customer could use to analyze videos themselves with 
                    the Pose Estimation model.`,
                    `Finally, I researched the possiblity of scoring on one specific exercise 
                    using an AI model that analyzes the aformentioned data.`,
                    `Below you will find the documents that I made during my internship, which go into 
                    more detail on certain aspects of it. Unfortunately I cannot use actual code or 
                    concrete examples due to a Non-Disclosure Agreement.`,
                ],
                pva: `Project plan`,
                r1: `Realisation 1: Research`,
                r2: `Realisation 2: Functioning`,
                reflect: `Reflection`,
            },
            projects: {
                mine: `My projects`,
                school: `School projects`,
                projectData: tileDataEnglish
            },
            pictureDialog: {
                norway: "Norway"
            },
            projectDialog: {
                technologies: "Used technologies"
            }
        },
        nl: {
            titles: {
                about: "Over mij",
                stage: "Stage",
                projects: "Projecten",
                language: "Taal: "
            },
            about: {
                first: `Hallo, mijn naam is Wout Mergaerts en ik ben juist
                afgestudeerd aan de IT Factory van Thomas More Kempen in
                Geel.`,
                second: `Van kleins af aan was ik al geïnteresseerd in alles wat met
                technologie te maken heeft. Daarbij ging ik vaak zelf op
                ontdekking om nieuwe dingen te leren, zoals bijvoorbeeld
                mods maken in Java voor het spel Minecraft of
                knutselen met een Arduino. Hierdoor kwam ik ook in contact
                met CoderDojo, waar ik enkele jaren les heb gevolgd en ook
                even als begeleider heb gewerkt. Uiteindelijk kwam ik
                terecht aan de IT Factory in Geel waar ik verder mijn
                interesses kon ontwikkelen in de verschillende lessen en
                groepsprojecten.`,
                third: `In het voorlaatste semester heb ik ook aan de Western Norway 
                University of Applied Sciences gestudeerd. Hier heb ik IT ook 
                van een andere hoek leren bekijken, veel nieuwe mensen leren 
                kennen en natuurlijk ook veel <0>foto's</0> getrokken.`,
                fourth: `Buiten mijn studies doe ik ook nog aan muurklimmen en speel
                ik ook soms wat piano.`,
                fifth: `Indien u meer informatie wilt over mijn vaardigheden en
                werkervaring, kan u dat vinden in <0>mijn CV</0> of kan u mij 
                altijd een <1>e-mail</1> sturen.`,
            },
            stage: {
                title: `Objectieve puntentelling in sport`,
                paragraphs: [
                    `Tijdens mijn Erasmussemester heb ik kennisgemaakt met AI en
                    Machine Learning en was ik er direct zeer geïnteresseerd in.
                    Hierdoor heb ik 13 weken lang, waarvan 11 weken van thuis
                    uit, tijdens het laatste semester van mijn opleiding stage
                    gevolgd bij Brainjar. Brainjar is een bedrijf dat onderdeel
                    is van de Raccoons Group en zich vooral bezighoudt met “AI
                    as a service”. Dit betekent dat ze end-to-end applicaties
                    met AI op maat maken voor bedrijven. Eén van hun motto’s
                    hierbij is de “human in the loop” waar bij de belangrijkste
                    beslissing van de applicatie nog steeds een mens betrokken
                    wordt. Daarbuiten doen zij ook onderzoek naar de
                    verschillende mogelijkheden en limieten van AI en de
                    toepassingen die hiermee gemaakt kunnen worden.`,
                    `Eén van deze onderzoeken is mijn stage, waarbij ik
                    onderzocht hoe je het jureren van een specifieke sport kan
                    objectiveren door middel van AI. Hierbij heb ik eerst
                    onderzoek gedaan naar de verschillende Pose Estimation
                    modellen en de voor- en nadelen hiervan om de sporters in
                    beeld te kunnen brengen voor verdere analyse.`,
                    `Vervolgens heb ik onderzoek gedaan naar het verbeteren van
                    dit model door bijvoorbeeld post-processing van de data.
                    Hierbij worden fouten die door het model gemaakt zijn uit de
                    data gehaald en aangepast. Ook heb ik een webapplicatie
                    gebouwd waarbij de klant zelf video’s kan laten analyseren
                    door het model.`,
                    `Ten slotte heb ik onderzoek gedaan naar de mogelijkheid om
                    een score te geven aan één specifieke oefening door middel
                    van een AI model dat de eerder genoemde data analyseert.`,
                    `Hieronder vindt u de documenten die ik in het kader van mijn
                    stage heb gemaakt en die dieper ingaan op bepaalde aspecten
                    hiervan, maar door een Non-Disclosure Agreement kan ik
                    helaas geen code of concrete voorbeelden gebruiken.`,
                ],
                pva: `Plan van aanpak`,
                r1: `Realistatie 1: Research`,
                r2: `Realisatie 2: Werking`,
                reflect: `Reflectie`,
            },
            projects: {
                mine: `Eigen projecten`,
                school: `Schoolprojecten`,
                projectData: tileData
            },
            pictureDialog: {
                norway: "Noorwegen"
            },
            projectDialog: {
                technologies: "Gebruikte technologieën"
            }
        },
    },
    fallbackLng: "nl",
    debug: false,

    // have a common namespace used around the full app
    ns: ["titles"],
    defaultNS: "titles",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
