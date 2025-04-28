import './Project.css'

export default function Project(projects) {    
    
    return (
        <article>
            <div className="screenshots">
                <img src={projects.screenshot} alt="screen" />
            </div>
            <div className="infos">
                <h2>{projects.title}</h2>
                <p>{projects.description}</p>
            </div>
            <div className="others">
                <div className="links">
                    <span>{projects.repo}</span>
                    <span>{projects.live}</span>
                </div>
                <div className="technos">
                    {
                        projects.stack.map(stack => (
                            <span>
                                {stack.name}
                                {stack.logo}
                            </span>
                        ))
                    }
                    
                </div>
            </div>
        </article>
    )
}