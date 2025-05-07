// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Project from "../components/Project";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const projectsDetails = Object.entries(projects).map(([key, project]) => {
    console.log(project.live);
    
    return (
      <Project
        key={key}
        title={project.title}
        description={project.description}
        screenshot={project.screenshot}
        repository={project.repository}
        live={project.live}
        stack={project.stack}
      />
    );
  });

  const slides = projectsDetails.map((slide) => (
    <SwiperSlide className="swiper-slide">{slide}</SwiperSlide>
  ));

  return (
    <section className="projects">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
    </section>
  );
}
