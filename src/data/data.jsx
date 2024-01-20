import MailIcon from "../components/icons/MailIcon";
import DocumentIcon from "../components/icons/DocumentIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";

import snake from "../assets/snake.png";
import KGB from "../assets/KGB.png";
import sum from "../assets/sum-sign.png";
import pig from "../assets/pig.png";
import wanderer from "../assets/wanderer.png";
import icon from "../assets/icon.png";

const links = [
    {
        icon: <MailIcon />,
        url: "mailto:wout.mergaerts@gmail.com"
    },
    {
        icon: <DocumentIcon />,
        url: ""
    },
    {
        icon: <GithubIcon />,
        url: "https://github.com/Wout-M"
    },
    {
        icon: <LinkedInIcon />,
        url: "https://www.linkedin.com/in/wout-mergaerts/"
    }
];

const projects = [
    {
        name: "Hungry Pig",
        img: pig,
        description: `A symbolic comparison game for testing the cognitive development of prematurely born pre-schoolers for my friends PhD research. There are 2 game modes: writing
        down the correct amounts & selecting the picture with the highest dots. At the end, an Excel file can be downloaded with the results for all pictures (speed, which picture contains the most dots & if the correct one is selected).`,
        technologies: ["Blazor", "MudBlazor", "Fluxor", ".NET 6"],
        link: "https://wout-m.github.io/HungryPig",
        github: "https://github.com/Wout-M/HungryPig"
    },
    {
        name: "Face Snake",
        img: snake,
        description: `A whole new way of playing the famous Snake game, using the position of your face in the camera. By using the Tiny Face Detecter of face-api.js, the position of your face can be determined
        and will be used to move the snake around. It's not the best and definitely not the easiest way to control the game, but it is very fun.`,
        technologies: ["React", "Javascript", "Tensorflow.js", "Material-UI"],
        link: "https://face-snake.netlify.app",
        github: "https://github.com/Wout-M/react-face-snake"
    },
    {
        name: "Resume Website",
        img: icon,
        description: "A CV made with React and Radix UI. This was definitely not necessary to make with React, but I learned a few things along the way and that's what it's all about.",
        technologies: ["React", "Javascript", "Radix", "Netlify"],
        link: "",
        github: ""
    },
    {
        name: "KGB Bot",
        img: KGB,
        description: `A Dicord bot that keeps track of deleted/edited messages for admins of servers that need to enforce rules but can't be on Discord 24/7. It also has some fun games and features for members
        like playing a quiz with the Open Trivia API or generating fun quotes with the InspiroBot API. It can also keep track of peoples birthday and automatically create events with Quartz.NET.`,
        technologies: ["Discord.NET", "Quartz.NET", ".NET 6", "Docker"],
        link: "https://github.com/Wout-M/Discord-Net-Bots",
        github: "https://github.com/Wout-M/Discord-Net-Bots"
    },
    {
        name: "Wanderer Bot",
        img: wanderer,
        description: `A Discord bot for a fantasy themed reading server of a famous YouTuber. With the help of a menu it can \"sort\" people in their respective guild by giving them the correct role.`,
        technologies: ["Discord.NET", "Quartz.NET", ".NET 6", "Docker"],
        link: "https://github.com/Wout-M/Discord-Net-Bots",
        github: "https://github.com/Wout-M/Discord-Net-Bots"
    },
    {
        name: "ExWi Bot",
        img: sum,
        description: `A Discord bot for the server for and by the students of the science department of the university of Bern. This bot is a bit of a combination of both where it can assign people to their
        respective degrees using a menu and also tracks deleted/edited messages.`,
        technologies: ["Discord.NET", ".NET 6", "Docker"],
        link: "https://github.com/Wout-M/Discord-Net-Bots",
        github: "https://github.com/Wout-M/Discord-Net-Bots"
    }
];

export { links, projects };