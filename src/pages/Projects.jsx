import { Accordion, AccordionItem } from "@heroui/react";

/**
 * TODO: 
 * 
 * Créer un composant Projet avec une image et une description
 * Importer ici le fichier projects.js avec les projets
 * Faire passer chaque projet en props d'un accordéon
 * 
 * 
 */

export default function Projects() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="w-3/5">
      <Accordion defaultExpandedKeys={["1"]}>
        <AccordionItem
          key="1"
          aria-label="Projet 1"
          subtitle="Appuyer pour ouvrir"
          title="Projet 1"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Projet 2"
          subtitle={
            <span>
              Appuyer pour ouvrir
            </span>
          }
          title="Projet 2"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Projet 3"
          subtitle="Appuyer pour ouvrir"
          title="Projet 3"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </section>
  );
}
