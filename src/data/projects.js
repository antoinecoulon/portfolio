import saveThingsScreenshot from "../assets/projects-screenshots/screenshot_save-things-extension.png";

import htmlIcon from "../assets/skills-icons/html5.svg";
import cssIcon from "../assets/skills-icons/css.svg";
import reactIcon from "../assets/skills-icons/react_dark.svg";
import typescriptIcon from "../assets/skills-icons/typescript.svg";
import viteIcon from "../assets/skills-icons/vitejs.svg";

export const projects = {
  saveThings: {
    title: "Save Things",
    description:
      "Save Things est une extension pour le navigateur Chrome. Au départ, ce projet a été construit en JavaScript pur en suivant un cours proposé par la plateforme Scrimba. L'objectif était construire une extension chrome qui permette de sauvegarder des liens, l'application étant reliée à une base de données Firebase. En repartant de cette idée, j'ai converti l'application vers du React.js afin de travailler ce framework car je vais l'utiliser en entreprise.",
    screenshot: saveThingsScreenshot,
    repository: "https://github.com/antoinecoulon/save-things_chrome-extension",
    demo: "undefined",
    stack: [
      {
        name: "HTML",
        logo: htmlIcon,
      },
      {
        name: "CSS",
        logo: cssIcon,
      },
      {
        name: "React.js",
        logo: reactIcon,
      },
      {
        name: "Typescript",
        logo: typescriptIcon,
      },
      {
        name: "Vite",
        logo: viteIcon,
      },
    ],
  },
  devDocs: {
    title: "Projet 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quas voluptatum esse veniam saepe placeat necessitatibus laudantium? Non, dolor. Natus voluptates nihil sunt beatae, sit corrupti aspernatur odit similique culpa, possimus ipsum id consequatur omnis impedit, porro quidem numquam aliquid delectus asperiores sapiente nulla dolorum labore molestiae repudiandae? Ad, et.",
    screenshot: "https://picsum.photos/850/730",
    repo: "test",
    live: "test",
    stack: [
      {
        name: "HTML",
        logo: "logo",
      },
      {
        name: "CSS",
        logo: "",
      },
    ],
  },
};
