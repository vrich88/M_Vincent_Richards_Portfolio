// imports
import React from "react";
// import { Icon } from "@iconify/react";
// feature image
import featureImg from "../images/showcase/featureImg.png";
// showcase images
import displayImg1 from "../images/showcase/displayImg1.png";
import displayImg2 from "../images/showcase/displayImg2.png";
import displayImg3 from "../images/showcase/displayImg3.jpg";
import displayImg4 from "../images/showcase/displayImg4.jpg";
import displayImg5 from "../images/showcase/displayImg5.png";
import displayImg6 from "../images/showcase/displayImg6.png";
// my pics
import avatar from "../images/myAvatar.png";
import headshot from "../images/myheadshot.jpg";
// logos
import tempLogo from "../images/networklogo.jpg";

export const featureCard = {
  link: "feature link",
  title: "feature title",
  description: "feature descript",
  repo: "",
  image: featureImg,
  alt: "feature alt",
};

export const portfolioCards = [
  {
    id: 1,
    link: "link 1",
    title: "title 1",
    description: "descript 1",
    repo: "",
    image: displayImg1,
    alt: "alt 1",
  },
  {
    id: 2,
    link: "link 2",
    title: "title 2",
    description: "descript 2",
    repo: "",
    image: displayImg2,
    alt: "alt 2",
  },
  {
    id: 3,
    link: "link 3",
    title: "title 3",
    description: "descript 3",
    repo: "",
    image: displayImg3,
    alt: "alt 3",
  },
  {
    id: 4,
    link: "link 4",
    title: "title 4",
    description: "descript 4",
    repo: "",
    image: displayImg4,
    alt: "alt 4",
  },
  {
    id: 5,
    link: "https://vrich88.github.io/MVR-bootcamp-challenge-4/",
    title: "Coding Quiz",
    description: "A simple quiz based in javascript",
    repo: "https://github.com/vrich88/MVR-bootcamp-challenge-4",
    image: displayImg5,
    alt: "alt 5",
  },
  {
    id: 6,
    link: "https://vrich88.github.io/MVR-bootcamp-challenge-6/",
    title: "Weather Forecast",
    description: "A basic weather forecast app using api fetch call",
    repo: "https://github.com/vrich88/MVR-bootcamp-challenge-6",
    image: displayImg6,
    alt: "alt 6",
  },
];
// future enhancement of all portfolio projects? maybe make a separate data js file
// export const allPortfolio = [{}];

export const myPics = {
  avatar: avatar,
  headshot: headshot,
  linkedIn: "https://www.linkedin.com/in/vincent-richards13/",
  gitHub: "https://github.com/vrich88",
  spotify: "https://open.spotify.com/user/31awmnydrl3l5w65aeewv4txlf6i",
};

export const logos = {
  tempLogo: tempLogo,
};

export const skills = [
  {
    id: 1,
    name: "Visual Studio Code",
  },
  {
    id: 2,
    name: "HTML",
  },
  {
    id: 3,
    name: "CSS",
  },
  {
    id: 4,
    name: "Javascript",
  },
  {
    id: 5,
    name: "Handlebars",
  },
  {
    id: 6,
    name: "Github",
  },
  {
    id: 7,
    name: "MySQL",
  },
  {
    id: 8,
    name: "Node",
  },
  {
    id: 9,
    name: "Mongo",
  },
  {
    id: 10,
    name: "Insomnia",
  },
  {
    id: 11,
    name: "React",
  },
  {
    id:12,
    name: "MERN",
  },
];