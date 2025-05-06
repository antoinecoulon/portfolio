import "./Project.css";

export default function Project({
  title,
  description,
  screenshot,
  repo,
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
          <span>{repo}</span>
          <span>{live}</span>
        </div>
        <div className="technos">
          {Object.entries(stack).map((stack, index) => (
            <span key={index}>{stack.name}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
