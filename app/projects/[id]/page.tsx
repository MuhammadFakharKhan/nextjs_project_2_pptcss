"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "project-one",
    title: "HTML & CSS Projects",
    description: "This is a brief description of Project One. It includes details about the technologies used and the problem it solves.",
    image: "/images/coding (1).png",
    subprojects: [
      {
        id: "html-project-1",
        title: "HTML Project 1",
        description: "Milestone 1: Static Interactive Resume Builder. Build a static resume using HTML, CSS, and TypeScript.",
        image: "/images/coding (1).png",
        url: "https://hackathon-project-01-brown.vercel.app/"
      },
      {
        id: "html-project-2",
        title: "HTML Project 2",
        description: "Milestone 3: Dynamic Resume Builder with Form. Convert the static resume into a Dynamic Resume Builder where users can fill out a form, and the resume is generated based on their input.",
        image: "/images/coding (1).png",
        url: "https://hackathon-project-3-chi.vercel.app/"
      },
      {
        id: "html-project-3",
        title: "HTML Project 3",
        description: "Milestone 4: Editable Resume. Make the generated resume editable after its created.",
        image: "/images/coding (1).png",
        url: "https://hackathon-project-4-c6ng.vercel.app/"
      },
    ]
  },
  {
    id: "project-two",
    title: "NextJs Projects",
    description: "This is a brief description of Project Two. It includes details about the technologies used and the problem it solves.",
    image: "/images/nextjs-img.png",
    subprojects: [
      {
        id: "NextJs-Project-1",
        title: "NextJs Project 1",
        description: "E Commerce Project",
        image: "/images/nextjs-img.png",
        url: "https://nextjs-milestone3-proj-ecom-cn6q.vercel.app/"
      },
      {
        id: "NextJs-Project-2",
        title: "NextJs Project 2",
        description: "Portfolio with Tailwind CSS",
        image: "/images/nextjs-img.png",
        url: "https://nextjs-project-2-pptcss.vercel.app/"
      },
      {
        id: "NextJs-Project-3",
        title: "NextJs Project 3",
        description: "Portfolio with Custom CSS.",
        image: "/images/nextjs-img.png",
        url: "https://nextjs-project-2-ppccss-nz3k.vercel.app/"
      },
    ]
  },
  {
    id: "project-three",
    title: "Typescript Projects",
    description: "This is a brief description of Project Three. It includes details about the technologies used and the problem it solves.",
    image: "/images/typescript.png",
    subprojects: [
      {
        id: "Typescript-Project-1",
        title: "Typescript Project 1",
        description: "Description for Typescript Project 1.",
        image: "/images/typescript.png",
        url: "https://example.com/typescript-project-1"
      },
      {
        id: "Typescript-Project-2",
        title: "Typescript Project 2",
        description: "Description for Typescript Project 2.",
        image: "/images/typescript.png",
        url: "https://example.com/typescript-project-2"
      },
      {
        id: "Typescript-Project-3",
        title: "Typescript Project 3",
        description: "Description for Typescript Project 3.",
        image: "/images/typescript.png",
        url: "https://example.com/typescript-project-3"
      },
    ]
  },
  // Add more projects as needed
];

const ProjectPage = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="flex flex-col items-center mt-[52px] px-4">
      <h1 className="text-center text-2xl mb-6 font-semibold">{project.title}</h1>
      <Image 
        src={project.image} 
        alt={project.title} 
        width={300} 
        height={200} 
        className="rounded-lg mb-4"
      />
      <p className="text-gray-700">{project.description}</p>

      {project.subprojects.length > 0 && (
        <div className="mt-6 w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Subprojects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.subprojects.map((subproject, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Image 
                  src={subproject.image} 
                  alt={subproject.title} 
                  width={300} 
                  height={200} 
                  className="rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{subproject.title}</h3>
                <p className="text-gray-700 mb-4">{subproject.description}</p>
                {subproject.url && (
                  <Link href={subproject.url} passHref
                     
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    
                      Visit Project
                    
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;

