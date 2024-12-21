import React from "react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      id: "project-one",
      title: "HTML & CSS PROJECTS",
      description: "This is a brief description of Project One. It includes details about the technologies used and the problem it solves.",
      image:"/images/coding (1).png",
      subprojects: []
    },
    {
      id: "project-two",
      title: "NextJs Projects",
      description: "This is a brief description of Project Two. It includes details about the technologies used and the problem it solves.",
      image: "/images/nextjs-img.png",
      subprojects: []
    },
    {
      id: "project-three",
      title: "Typescript Projects",
      description: "This is a brief description of Project Three. It includes details about the technologies used and the problem it solves.",
      image: "/images/typescript.png",
      subprojects: []
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex flex-col items-center mt-[52px] px-4">
      <h1 className="text-center text-2xl mb-6 font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.id}`} key={index}
             className="bg-white p-6 rounded-lg shadow-lg text-center block">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={300} 
                height={200} 
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;






