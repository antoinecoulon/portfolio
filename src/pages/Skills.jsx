function Skills() {
    const learning = "React.js"
    const skills = [
        {
            name: "HTML", 
            logo: ""
        },
        {
            name: "CSS",
            logo: ""
        }
    ]
    
    return (
        <section className="skills flex flex-col items-center">
            <h2>Actuellement, j'étudie: <span className="text-2xl font-bold text-highlight ml-4">{learning}</span></h2>
            <div className="carousel">
            {skills.map(skill => (
                <div key={skill.name} className="mt-8" >
                    <h3>{skill.name}</h3>
                    <span>{skill.logo}</span>
                </div>
            ))}
            </div>
        </section>
    )
}

export default Skills