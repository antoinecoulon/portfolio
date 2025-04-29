import "./About.css";

export default function About() {
  return (
    <section className="about flex-col items-center w-4/5">
      <img
        className="photo w-50"
        src="https://avatar.iran.liara.run/public/boy"
        alt="Avatar placeholder"
      />
      <div className="about-text">
        <h2 className="text-2xl ml-8 mb-4 mt-16 self-start">A propos de moi</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac orci
          a ligula commodo luctus non vitae leo. Aliquam erat volutpat. Ut vitae
          rhoncus eros. Aenean porttitor justo vel magna tincidunt, non lacinia
          urna consectetur. Vestibulum fermentum sodales venenatis. Cras gravida
          lectus in turpis pellentesque, eget consequat justo vehicula.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
          <br />
          Maecenas sed ex ornare, pretium diam vitae, gravida ex. Praesent
          laoreet pellentesque quam et tristique. Phasellus lacinia elit eu enim
          elementum venenatis. Integer feugiat, erat eget vehicula vehicula,
          nisl elit pulvinar nunc, quis efficitur nibh velit fringilla ex.
          Quisque laoreet, dolor vel rhoncus efficitur, enim felis elementum
          ante, quis fermentum sem massa vel dolor. Aenean nec augue ut arcu
          eleifend elementum a sit amet tellus. Quisque nec velit dui. Phasellus
          sollicitudin quam in ante condimentum aliquet. Nullam lacinia
          convallis bibendum.
        </p>
      </div>
    </section>
  );
}
