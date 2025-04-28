import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './SkillsCarousel.css'

export default function SkillsCarousel({ skills }) {
    
    const carousel = (slider) => {
        const z = 300
        function rotate() {
            const deg = 360 * slider.track.details.progress
            slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
        }
        slider.on("created", () => {
            const deg = 360 / slider.slides.length
            slider.slides.forEach((element, index) => {
                element.style.transform = `rotateY(${deg * index}deg) translateZ(${z}px`
            })
            rotate()
        })
        slider.on("detailsChanged", rotate)
    }
    
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )
  
    return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {skills.map((skill, index) => (
            <div key={index} className="carousel__cell">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
              <p className="text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
