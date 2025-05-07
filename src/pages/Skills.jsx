import SkillsCarousel from "../components/SkillsCarousel";
import "./Skills.css";

import htmlLogo from "../assets/skills-icons/html5.svg";
import cssLogo from "../assets/skills-icons/css.svg";
import jsLogo from "../assets/skills-icons/javascript.svg";
import reactLogo from "../assets/skills-icons/react_dark.svg";
import nodeLogo from "../assets/skills-icons/nodejs.svg";
import djangoLogo from "../assets/skills-icons/django.svg";
import expressjsLogo from "../assets/skills-icons/expressjs_dark.svg";
import gitLogo from "../assets/skills-icons/git.svg";
import javaLogo from "../assets/skills-icons/java.svg";
import mongodbLogo from "../assets/skills-icons/mongodb.svg";
import mysqlLogo from "../assets/skills-icons/mysql.svg";
import phpLogo from "../assets/skills-icons/php_dark.svg";
import pythonLogo from "../assets/skills-icons/python.svg";
import reactnativeLogo from "../assets/skills-icons/react-native-1.svg";
import springLogo from "../assets/skills-icons/spring.svg";
import tailwindLogo from "../assets/skills-icons/tailwindcss.svg";
import typescriptLogo from "../assets/skills-icons/typescript.svg";
import viteLogo from "../assets/skills-icons/vitejs.svg";
import markdownLogo from "../assets/skills-icons/markdown-dark.svg";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: htmlLogo, isLearning: false },
    { name: "CSS", logo: cssLogo, isLearning: false },
    { name: "Tailwind CSS", logo: tailwindLogo, isLearning: false },
    { name: "JavaScript", logo: jsLogo, isLearning: false },
    { name: "Typescript", logo: typescriptLogo, isLearning: false },
    { name: "React.js", logo: reactLogo, isLearning: true },
    { name: "React Native", logo: reactnativeLogo, isLearning: false },
    { name: "Java", logo: javaLogo, isLearning: false },
    { name: "Spring", logo: springLogo, isLearning: false },
    { name: "PHP", logo: phpLogo, isLearning: false },
    { name: "Node.js", logo: nodeLogo, isLearning: false },
    { name: "Express.js", logo: expressjsLogo, isLearning: false },
    { name: "Python", logo: pythonLogo, isLearning: false },
    { name: "Django", logo: djangoLogo, isLearning: false },
    { name: "MySQL", logo: mysqlLogo, isLearning: false },
    { name: "MongoDB", logo: mongodbLogo, isLearning: false },
    { name: "Git", logo: gitLogo, isLearning: false },
    { name: "Vite", logo: viteLogo, isLearning: false },
    { name: "Markdown", logo: markdownLogo, isLearning: false },
  ];

  return (
    <section className="skills">
      <h2>
        Actuellement, j'étudie: <br />
        <span className="skill-learning">
          {skills
            .filter((skill) => skill.isLearning)
            .map((skill) => (
              <>
                <img src={skill.logo} className="skill-learning-logo" />
                <span>{skill.name}</span>
              </>
            ))}
        </span>
      </h2>
      <div className="carousel">
        <SkillsCarousel skills={skills} />
      </div>
    </section>
  );
}
