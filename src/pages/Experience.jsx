import { experiences } from "../data/experiences";
import { Timeline } from "@chakra-ui/react"

/*

    TODO:

    Animer les points quand on scrolle (Framer Motion)
    Ajouter des icones (diplome, stage, certificat)
    Ajouter les certificats
    Verticale sur mobile, horizontale sur écran large

*/


export default function Experience() {
  return (
    <section className="timeline relative p-10">
      <div className="timeline-frise absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-highlight"></div>
      <div className="timeline-items space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className="w-5/12 p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-highlight">{exp.experience}</h3>
                <span className="text-sm font-semibold text-accent-secondary">{exp.year}</span>
                <p className="text-sm text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
