// Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Project from '../components/Project'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Projects.css'
import { projects } from '../data/projects';

/**
 * TODO: 
 * Importer ici le fichier projects.js avec les projets
 * Faire passer chaque projet en props d'un accordéon
 * 
 * 
 */

export default function Projects() {
  const projectsDetails = projects.map(project => {
    return <Project 
      title={project.title}
      description={project.description}
      screenshot={project.screenshot}
      repo={project.repo}
      live={project.live}
      stack={project.stack}
    />
  })

  const slides = projectsDetails.map(slide => (
    <SwiperSlide className='swiper-slide'>{slide}</SwiperSlide>
  ))

  return (
    <section className="projects">
      
      <Swiper
        className='swiper'
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
