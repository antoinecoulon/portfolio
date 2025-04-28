import SkillsCarousel from "../components/SkillsCarousel"

export default function Skills() {
    const learning = {name: "React.js", logo: ""}
    const skills = [
        {name: "HTML", logo: ""},
        {name: "CSS", logo: ""},
        {name: "JavaScript", logo: "/icons/javascript.svg"},
        {name: "React", logo: "/icons/react.svg"},
        {name: "Node.js", logo: "/icons/nodejs.svg"},
    ]
    
    return (
        <section className="skills">
            <h2>Actuellement, j'étudie: <span>{learning.name} {learning.logo}</span></h2>
            <div className="carousel">
                <SkillsCarousel 
                    skills={skills}
                />
            </div>
        </section>
    )
}