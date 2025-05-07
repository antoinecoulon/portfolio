import { experiences } from "../data/experiences";
import { Timeline } from "@chakra-ui/react";
import "./Experience.css";

/*

    TODO:

    Animer les points quand on scrolle (Framer Motion)
    Ajouter des icones (diplome, stage, certificat)
    Ajouter les certificats
    Verticale sur mobile, horizontale sur écran large

*/

export default function Experience() {
  return (
    <section className="timeline-section">
      <Timeline.Root className="timeline" size="xl" colorPalette="blue">
        {experiences.map((exp, index) => (
          <Timeline.Item key={index} className="timeline-item">
            <Timeline.Content width="auto">
              <Timeline.Title className="exp-year">{exp.year}</Timeline.Title>
            </Timeline.Content>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content flex="1">
              <Timeline.Title className="exp-title">
                {exp.experience}
              </Timeline.Title>
              <Timeline.Description className="exp-description">
                {exp.description}
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </section>
  );
}
