import saveThingsScreenshot from "../assets/projects-screenshots/screenshot_save-things-extension.png";
import devDocsScreenshot from "../assets/projects-screenshots/screenshot_dev-docs.png"
import memeGeneratorScreenshot from "../assets/projects-screenshots/screenshot_meme-generator.png"

import htmlIcon from "../assets/skills-icons/html5.svg";
import cssIcon from "../assets/skills-icons/css.svg";
import reactIcon from "../assets/skills-icons/react_dark.svg";
import typescriptIcon from "../assets/skills-icons/typescript.svg";
import viteIcon from "../assets/skills-icons/vitejs.svg";
import markdownIcon from "../assets/skills-icons/markdown-dark.svg"
import jsIcon from "../assets/skills-icons/javascript.svg";

export const projects = {
  saveThings: {
    title: "Save Things",
    description:
      "Save Things est une extension pour le navigateur Chrome. Au départ, ce projet a été construit en JavaScript pur en suivant un cours proposé par la plateforme Scrimba. L'objectif était construire une extension chrome qui permette de sauvegarder des liens, l'application étant reliée à une base de données Firebase. En repartant de cette idée, j'ai converti l'application vers du React.js afin de travailler ce framework car je vais l'utiliser en entreprise.",
    screenshot: saveThingsScreenshot,
    repository: "https://github.com/antoinecoulon/save-things_chrome-extension",
    demo: "undefined",
    stack: [
      { name: "HTML", logo: htmlIcon },
      { name: "CSS",  logo: cssIcon  },
      { name: "React.js", logo: reactIcon },
      { name: "Typescript", logo: typescriptIcon },
      { name: "Vite", logo: viteIcon },
    ],
  },
  devDocs: {
    title: "Dev Docs",
    description:
      "Dev Docs est un site construit grâce à Docusaurus. Il me permet de prendre mes notes de cours, de conserver de la documentation et des ressources et de réaliser une gestion de mes projets.",
    screenshot: devDocsScreenshot,
    repository: "https://github.com/antoinecoulon/antoinecoulon-docs",
    live: "https://antoinecoulon.github.io/antoinecoulon-docs/",
    stack: [
      { name: "Markdown", logo: markdownIcon },
      { name: "JavaScript", logo: jsIcon }
    ],
  },
  memeGenerator: {
    title: "Meme Generator",
    description:
      "Un générateur de memes simple qui m'a permit de travailler les hooks useEffect et useState de React, tout en m'entrainant avec Typescript. L'enregistrement facile du meme n'a pas encore été implémentée, pour l'instant il vous faudra faire une capture d'écran afin de récupérer l'image et le texte du meme.",
    screenshot: memeGeneratorScreenshot,
    repository: "https://github.com/antoinecoulon/meme-generator",
    live: "https://antoinecoulon.github.io/meme-generator/",
    stack: [
      { name: "HTML", logo: htmlIcon },
      { name: "CSS",  logo: cssIcon  },
      { name: "React.js", logo: reactIcon },
      { name: "Typescript", logo: typescriptIcon },
      { name: "Vite", logo: viteIcon }
    ],
  },
};
