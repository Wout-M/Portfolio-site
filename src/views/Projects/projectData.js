import kgb from "../../assets/images/kgb.jpg";
import harrypotter from "../../assets/images/harrypotter.jpg";

const categories = {
    discordbot: "discord bot",
    machinelearning: "machine learning",
};

const tileData = [
    {
        img: { kgb },
        title: "KGB Bot",
        category: categories.discordbot,
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
            nieuwe functies. Sinds kort heb de bot ook helemaal van scratch opnieuw gemaakt met al de extra kennis die ik de laatste 2 jaar heb opgedaan, waardoor het 
            veel stabieler is, automatische herstarting bij eventuele crashes en ook gemonitord kan worden vanuit een dashboard.`,
        ],
        links: [
            {
                url: "https://discord.gg/XA8MZkV",
                text: "Join de server met de bot",
            },
            {
                url: "https://github.com/Wout-M/KGB-Bot",
                text: "De Github repo",
            },
        ],
    },

    {
        img: { harrypotter },
        title: "McGonagall Bot",
        category: categories.discordbot,
        text: [
            `Discord is een sociaal media platform waarmee mensen van over heel de wereld met elkaar kunnen chatten, bellen of videobellen. 
          Hierbij kan je dat rechtstreeks met elkaar doen, maar kan je ook in een server gaan. Zo'n servers zijn eigenlijk gewoon grote 
          groepchats waarin je met enkele tientallen tot enkele tienduizenden mensen in kan zitten.`,
            `Eén van deze servers heeft als thema Harry Potter. Om de beleving compleet te maken heeft deze server ook de 4 "huizen" van de school en "kamers" voor elk jaar. 
          Hiervoor heb ik een bot geschreven die automatisch een jaar role geeft als iemand nieuw in de server komt. Ook kunnen deze nieuwe leden een huis role kiezen die de bot aan 
          hen geeft. Daarbuiten heeft het ook de admin en leuke functies die de KGB bot, buiten het loggen dan.`,
            `Deze bot wordt al iets meer dan een jaar gebruikt in een server van meer dan 3300 leden. Net zoals de KGB Bot heb ik deze bot ook recent herschreven voor betere stabiliteit, 
          automatisch herstarten en monitoring.`,
        ],
        links: [
            {
                url: "https://discord.gg/XA8MZkV",
                text: "Join de server met de bot",
            },
            {
                url: "https://github.com/Wout-M/McG-Bot",
                text: "De Github repo",
            },
        ],
    },
];

export default tileData;
