import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./SkillsCarousel.css";

export default function SkillsCarousel({ skills }) {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    loop: "true"
  });

  return (
    <div className="keen-slider" ref={sliderRef}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className={
            skill.isLearning
              ? `keen-slider__slide isLearning`
              : `keen-slider__slide`
          }
        >
          <img className="skill-logo" src={skill.logo} alt={skill.name} />
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
