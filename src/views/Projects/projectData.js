import kgb from "../../assets/images/KGB.png";
import harrypotter from "../../assets/images/harrypotter.jpg";
import exwi from "../../assets/images/sum-sign.png";
import snake from "../../assets/images/snake.png";
import spotify from "../../assets/images/vinyl.jpg";
import feelgood from "../../assets/images/logo.jpg";
import nvdos from "../../assets/images/nvdos.jpg";
import unity from "../../assets/images/unity.jpeg"

import statusrapport from "../../assets/documents/statusrapport.pdf";
import model from "../../assets/documents/business_model.pdf";
import trainingssessie from "../../assets/documents/Trainingssessie_lesbundel.pdf"

const categories = {
    discordbot: "Discord bot",
    AI: "AI",
    web: "Web development",
    event: "Evenement",
    unity: "Unity"
};

const tileData = [
    {
        img: unity,
        title: "Unity trainingssessie",
        categories: [categories.unity],
        text: [
            `In het tweede jaar van mijn studies kregen we een eerste kans om onze kennis te kunnen toepassen door een trainingssessie te geven over een informatica
            gerelateerd onderwerp. Samen met een medestudent ben ik les gaan geven aan 2 studenten met autisme in een middelbare school. Elk van ons gaf aan 1 student 
            les, waarbij ik Unity aanleerde aan de ene en mijn medestudent HMTL & CSS aanleerde aan de andere.`,
            `Mijn student had al een basiskennis van zowel Unity als C# en had mij ook op voorhand één van zijn projecten doorgestuurd. Dit project heb ik verder uitgewerkt 
            tot een kleine volwaardige game met random level generatie, meer onderdelen in de game en een hoofd- en pauzemenu.`,
            `In de onderstaande links kan u mijn lesbundel vinden dat ik gemaakt heb voor de student.`,
        ],
        technologies: [
            "C#",
            "Unity",
        ],
        links: [
            {
                url: trainingssessie,
                text: "Lesbundel",
            },
        ],
    },
    {
        img: spotify,
        title: "Spotify Valence",
        categories: [categories.AI],
        text: [
            `Tijdens mijn Erasmussemester in Noorwegen heb ik het vak "DAT158 Machine Learning and Advanced Algorithms" gehad, waarbij ik kennismaakte 
            met de basis van Machine Learning en de theorie achter bekende algoritmes. Een van de opdrachten van het Machine Learning gedeelte kregen 
            was om onze opgedane Machine Learning kennis toe te passen op een volledig zelf gekozen dataset`,
            `Hiervoor hebben ik en enkele medestudenten met de "Spotify Tracks Database" gewerkt om de valence, of positiviteit, van een liedje voorspellen. 
            Daarbij hebben we de dataset verkend, geprocessed, alles in een pipeline gestoken, verschillende modellen en combinaties van modellen getest en ten 
            slotte deze allemaal vergeleken. Ik heb hierbij de volledige opdracht gemaakt omdat de kennis van mijn medestudenten van het onderwerp wat achter liep. 
            Tijdens de ontwikkeling waren zij wel telkens aanwezig en heb ik ook alles wat ik gedaan heb uitgelegd zodat zij na de opdracht op hetzelfde niveau zaten.`,
            `Met de onderstaande link kan je naar de Github repo gaan om te zien wat we allemaal toegepast hebben.`,
        ],
        technologies: [
            "Python",
            "Data processing: Encoders, Numpy, Pandas, Pipelines, Seaborn",
            "Regression modellen: Linear, Decision Tree, Random Forest, Gradient Boosting, Extra Trees, Support Vector Machine, XGBoost",
            "Modellen combineren: vecstack, ML-Ensemble",
        ],
        links: [
            {
                url: "https://github.com/Wout-M/ML-Assignment2",
                text: "De Github repo",
            },
        ],
    },
    {
        img: nvdos,
        title: "Nacht van de Ondernemende Student",
        categories: [categories.event],
        text: [
            `In 2018 heb ik deelgenomen aan de Nacht van de Ondernemende student, dat door de studenten van Eventmanagement georganiseerd werd. Hierbij 
            lostte ik met een groep van Belgische en internationale studenten een business case op.`,
            `De business case was opgesteld door de directie van het schoenenbedrijf Torf. Torfs wou proberen om jongeren sterker in hun schoenen te laten 
            staan. Samen met mijn medestudenten kwamen we op het idee om de Torfs Games te organiseren, een soort van Highland Games dat door Torfs georganiseerd 
            werd in de laatste jaren van middelbare scholen.`,
            `In de onderstaande links kan u ons uitgewerkte business model vinden`,
        ],
        links: [
            {
                url: model,
                text: "Business model",
            },
            {
                url:
                    "https://www.hln.be/in-de-buurt/vorselaar/nacht-van-de-ondernemende-student-in-thomas-more-hogeschool~a3736f1c/",
                text: "Artikel over de nacht",
            },
        ],
    },
    {
        img: snake,
        title: "Face snake",
        categories: [categories.AI, categories.web],
        text: [
            `Om mijn kennis en de limieten van React en AI te testen wou ik proberen om de twee te combineren. Uit deze mix is "Face snake" gekomen,
            waarbij je het bekende spel Snake kan besturen door met je gezicht voor de camera te bewegen.`,
            `Voor de locatie van je gezicht te berekenen wordt gebruik gemaakt van het TensorFlow.js model MediaPipe Facemesh. Deze locatie wordt 
            asynchroon berekend en doorgegeven aan de applicatie, waarbij deze de richting kan berekenen dat de slang naartoe gaat. Door de vaste 
            grootte van het speelveld is de site echter wel enkel geoptimaliseerd voor desktop gebruik.`,
            `Met de onderstaande link kan je Face snake live uitpoberen.`,
        ],
        technologies: [
            "Javascript",
            "Tensorflow.js: MediaPipe Facemesh",
            "React",
            "CSS",
            "Material-UI",
        ],
        links: [
            {
                url: "https://woutmergaerts.com/snake/",
                text: "Speel Face snake",
            },
        ],
    },
    {
        img: feelgood,
        title: "Feel Good Inc",
        categories: [categories.web],
        text: [
            `Voor het project APP-BI heb ik samen met enkele medestudenten een webapplicatie voor een fictieve klant gemaakt. Deze fictieve klant, door ons "Feel Good Inc." 
            genoemd, was een bedrijf dat coachings en workshops organiseerde voor leerkrachten met te veel stress of een burnout.`,
            `Voor de ontwikkeling van deze webapplicatie kreeg iedereen zijn eigen taken aangewezen die ze moesten programmeren. Deze taken konden frontend, backend of beiden zijn. 
            In het onderstaande statusrapport kunt u zien welke onderdelen ik heb gemaakt. Daarbij heb ik ook nog de frontend van de overzichtpagina's van de (hoofd)coachen en directeur 
            gemaakt. Ook kan u een overzicht vinden van de accounts waarmee u kan aanmelden op de site.`,
            `Bij het verplaatsen van de hosting van de originele site naar mijn hosting zijn er door enkele onbekende technische problemen een paar functionaliteiten van de webapplicatie 
            verloren gegaan, maar met de onderstaande link kan deze bezocht worden.`,
        ],
        technologies: ["PHP", "MVC model", "HTML5", "CSS3", "Bootstrap"],
        links: [
            {
                url: statusrapport,
                text: "Statusrapport",
            },
            {
                url: "https://woutmergaerts.com/team17/",
                text: "De webapplicatie",
            },
        ],
    },
    {
        img: kgb,
        title: "KGB Bot",
        categories: [categories.discordbot],
        text: [
            `Discord is een sociaal media platform waarmee mensen van over heel de wereld met elkaar kunnen chatten, bellen of videobellen. 
            Hierbij kan je dat rechtstreeks met elkaar doen, maar kan je ook in een server gaan. Zo'n servers zijn eigenlijk gewoon grote 
            groepchats waarin je met enkele tientallen tot enkele tienduizenden mensen in kan zitten.`,
            `Bij zo'n grote servers zijn er natuurlijk ook regels die dienen opgevolgd te worden, wat helaas niet altijd gebeurd. Tijdens deze
            overtredingen werd dan meestal ook stiekem het bewijs verwijdert waardoor er niets aan de hand leek te zijn. Om dit probleem op te lossen 
            leek een bot ideaal, maar de enige opties waren ofwel zeer gelimiteerd ofwel betalend. Het was dus nodig om zelf voor een oplossing te zorgen.`,
            `Omdat ik nog niet veel van Javascript of Node.js kende, heb ik eerst mijn kennis daarover bijgeschaafd, om vervolgens met Discord.js een bot te 
            schrijven. Deze geeft een melding wanneer er een bericht verwijderd of aangepast wordt en toont daarbij de inhoud, tijdstip, auteur, in welk kanaal dit 
            voorkwam en eventuele bijlagen. Om het niet alleen een saaie log bot te laten zijn, heb ik het een bijpassende naam gegeven en er ook enkele leuke functies 
            in verwerkt zoals bijvoorbeeld het kunnen antwoorden op ja/nee vragen, quizzen mee spelen of sinds kort ook meldingen geven als iemand jarig is.`,
            `Deze bot wordt ondertussen al meer dan twee jaar gebruikt in een server van ongeveer 300 - 400 mensen en wordt om de zoveel tijd geüpdate met 
            nieuwe functies. Sinds kort heb de bot ook helemaal van scratch opnieuw gemaakt met al de extra kennis die ik de laatste 2 jaar heb opgedaan. Hierdoor is de bot 
            veel stabieler, start deze automatisch opnieuw op bij eventuele crashes en wordt deze ook gemonitord vanuit een dashboard.`,
        ],
        technologies: [
            "Node.js: Axios, Chalk, Discord.js, Moment, PM2",
            "Javascript",
        ],
        links: [
            {
                url: "https://discord.gg/B3vdnpd",
                text: "Join de test server met de bot",
            },
            {
                url: "https://github.com/Wout-M/KGB-Bot",
                text: "De Github repo",
            },
        ],
    },
    {
        img: harrypotter,
        title: "McGonagall Bot",
        categories: [categories.discordbot],
        text: [
            `Discord is een sociaal media platform waarmee mensen van over heel de wereld met elkaar kunnen chatten, bellen of videobellen. 
            Hierbij kan je dat rechtstreeks met elkaar doen, maar kan je ook in een server gaan. Zo'n servers zijn eigenlijk gewoon grote 
            groepchats waarin je met enkele tientallen tot enkele tienduizenden mensen in kan zitten.`,
            `Eén van deze servers is gemaakt voor een bekende YouTuber en heeft als thema Harry Potter. Om de beleving compleet te maken heeft deze server ook chatkanalen voor 
            elk van de 4 afdelingen van de school en chatkanaal voor elk schooljaar. Hiervoor heb ik een bot geschreven die automatisch een jaar role geeft als iemand nieuw in de server komt. 
            Hiermee kunnen ze in het chatkanaal van hun schooljaar terecht Ook kunnen deze nieuwe leden een huis role kiezen uit een keuzemenu van de bot. Daarmee krijgen ze dan ook toegang tot 
            het chatkanaal van hun gekozen afdeling. Daarbuiten heeft het ook verschillende admin functies en ook leukere functies voor de leden, zoals bijvoorbeeld quizzen, gifs plaatsen, ... .`,
            `Deze bot wordt al iets meer dan een jaar gebruikt in een server van meer dan 3300 leden. Net zoals de KGB Bot heb ik deze bot ook recent herschreven voor betere stabiliteit, 
            automatisch herstarten en monitoring.`,
        ],
        technologies: [
            "Node.js: Axios, Chalk, Discord.js, Moment, PM2",
            "Javascript",
        ],
        links: [
            {
                url: "https://discord.gg/B3vdnpd",
                text: "Join de test server met de bot",
            },
            {
                url: "https://github.com/Wout-M/McG-Bot",
                text: "De Github repo",
            },
        ],
    },
    {
        img: exwi,
        title: "ExWi Bot",
        categories: [categories.discordbot],
        text: [
            `Discord is een sociaal media platform waarmee mensen van over heel de wereld met elkaar kunnen chatten, bellen of videobellen. 
            Hierbij kan je dat rechtstreeks met elkaar doen, maar kan je ook in een server gaan. Zo'n servers zijn eigenlijk gewoon grote 
            groepchats waarin je met enkele tientallen tot enkele tienduizenden mensen in kan zitten.`,
            `Eén van deze servers is gemaakt voor en door de studenten van het exacte wetenschappen departement van de universiteit van Bern. Hierin kunnen de leerlingen van verschillende
            studierichtingen (zoals bijvoorbeeld fysica, wiskunde of informatica) terecht voor vragen in verband met de leerstof. Om te vermijden dat studenten meldingen krijgen van de chatkanalen 
            van elke studierichting krijgen ze roles voor de richtingen waar zij in zitten om hen enkel toegang te geven tot de chatkanalen van deze richting. Dit werd tot kort manueel gedaan, maar 
            op vraag van een van de admins heb ik een bot geschreven waarbij de leerlingen dit zelf kunnen doen met een keuzemenu van de bot. Ook kan deze bot, net zoals de KGB Bot, de aangepaste 
            of verwijderde berichten loggen. Net zoals al de andere bots heeft deze ook een dashboard.`,
            `Deze bot zal binnenkort gebruikt worden als de server officiëel uitgebreid wordt naar de verschillende studierichtingen.`,
        ],
        technologies: ["Node.js: Chalk, Discord.js, PM2", "Javascript"],
        links: [
            {
                url: "https://discord.gg/B3vdnpd",
                text: "Join de test server met de bot",
            },
        ],
    },
];

export default tileData;
