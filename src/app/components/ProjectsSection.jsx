"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Trello Clone",
    description: "build trello clone using nextjs14 and server action and also prisma as ORM and mongoDb for databse.",
    image: "/images/projects/Taskona.png",
    gitUrl: "https://github.com/abdelbassetbenatmani/Saas-Task-managment",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Full Learning managment System",
    description: "build full learning management system using nextjs and express for backend and mongoDb for databse.",
    image: "/images/projects/LMS-1.png",
    gitUrl: "https://github.com/abdelbassetbenatmani/lms-system",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Full Ecommerce website with all functionality by Reactjs and Nodejs .",
    image: "/images/projects/Ecommerce.png",
    gitUrl: "https://github.com/abdelbassetbenatmani/Ecommerce_FrontEnd",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Cars show ",
    description: "Build a website that displays all available cars from different brands with a customized search.",
    image: "/images/projects/cars.png",
    gitUrl: "https://github.com/abdelbassetbenatmani/Cars-showcase",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "LMS landing page",
    description: "professional landing page for learning management system.",
    image: "/images/projects/landing-page.png",
    gitUrl: "https://github.com/abdelbassetbenatmani/lms-system",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
