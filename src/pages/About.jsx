import photo from '../assets/photo.png'
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <img
        className="photo"
        src={photo}
        alt="Avatar placeholder"
      />
      <div className="about-text">
        <h2>A propos de moi</h2>
        <p>
          Depuis tout jeune, je suis attiré par l'informatique et les nouvelles technologies en général ! Cela m'a conduit à entrer en BTS Services Informatiques aux Organisations, dans lequel j'ai étudié les fondamentaux du développement web et de la programmation, ainsi que de l'administration des systèmes et réseaux. J'ai obtenu ce diplôme en 2015.
          <br /><br />
          Suite à cela, j'ai eu l'occasion de travailler dans le milieu social, autre domaine qui m'intéressait beaucoup. Petite enfance, animation, travailler dans des collèges, j'ai essayé beaucoup de choses... Enfin j'ai été Accompagnant éducatif pendant plusieurs années, métier qui m'a énormément apporté, tant personnellement que professionnellement.
          <br /><br />
          C'est finalement en 2024 que je choisis de retourner vers le domaine de l'informatique et plus précisément dans le développement d'applications ! Je passe alors un titre de Concepteur Développeur d'Applications (CDA), équivalent Bac+4, qui m'apporte de solides compétences sur des technologies et domaines variés.
          <br /><br />
          En 2025, je commence l'aventure COODE-NT ! Petite entreprise avec de grands atouts, qui créé des applications web et mobiles ayant un impact positif dans le quotidien de ses utilisateurs.
        </p>
      </div>
    </section>
  );
}
