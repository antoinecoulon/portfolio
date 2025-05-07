import "./Project.css";
import github from "../assets/github_dark.svg";
import demo from "../assets/demo-live.svg";

export default function Project({
  title,
  description,
  screenshot,
  repository,
  live,
  stack,
}) {
  return (
    <article>
      <div className="screenshots">
        <img src={screenshot} alt="screen" />
      </div>
      <div className="infos">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="others">
        <div className="links">
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github Logo" />
          </a>
          {live === undefined ? null : (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <img src={demo} alt="Demo Live Logo" />
            </a>
          )}
        </div>
        <div className="technos">
          {Object.entries(stack).map(([key, tech], index) => (
            <span key={`${key}-${index}`}>
              <img src={tech.logo} alt={`${tech.name}Logo`} />
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
