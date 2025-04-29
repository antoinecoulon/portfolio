import SkillsCarousel from "../components/SkillsCarousel"
import './Skills.css'

import htmlLogo from "../assets/skills-icons/html5.svg";
import cssLogo from "../assets/skills-icons/css.svg";
import jsLogo from "../assets/skills-icons/javascript.svg";
import reactLogo from "../assets/skills-icons/react_dark.svg";
import nodeLogo from "../assets/skills-icons/nodejs.svg";


export default function Skills() {
    const skills = [
        { name: "HTML", logo: htmlLogo, isLearning: false },
        { name: "CSS", logo: cssLogo, isLearning: false },
        { name: "JavaScript", logo: jsLogo, isLearning: false },
        { name: "React.js", logo: reactLogo, isLearning: true },
        { name: "Node.js", logo: nodeLogo, isLearning: false },
    ]
    
    return (
        <section className="skills">
            <h2>
                Actuellement, j'étudie: <br />
                <span className="skill-learning">
                    {skills
                        .filter(skill => skill.isLearning)
                        .map(skill => (
                            <>
                                <img 
                                    src={skill.logo}
                                    className="skill-learning-logo" 
                                />
                                <span>{skill.name}</span>
                            </>
                        ))   
                    }
                </span>
            </h2>
            <div className="carousel">
                <SkillsCarousel 
                    skills={skills}
                />
            </div>
        </section>
    )
}