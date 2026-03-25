"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "VRDsystem",
    description: "SaaS de gestão empresarial para armazéns com rastreio total em tempo real e IA integrada.",
    image: "/projects/vrd.jpg",
    link: "https://www.vrdsystem.com.br/",
    repo: null,
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Law Match",
    description: "Jogo interativo para testar conhecimentos jurídicos com sistema de cards tipo match.",
    image: "/projects/law.jpg",
    link: "https://law-match.vercel.app/",
    repo: "https://github.com/Victor-Hugo-Soares/law-match",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Talitha Pedroso",
    description: "Site premium para clínica de estética com protocolos personalizados e agendamento.",
    image: "/projects/talitha.jpg",
    link: "https://talitha-pedroso-ipsi.vercel.app/",
    repo: "https://github.com/Victor-Hugo-Soares/talitha-pedroso",
    tags: ["Next.js", "Styled Components", "Framer Motion"],
  },
  {
    title: "Studio Bela",
    description: "Landing page moderna para salão de beleza com foco em conversão e agendamento.",
    image: "/projects/studiobela.jpg",
    link: "https://studio-bela.vercel.app/",
    repo: "https://github.com/Victor-Hugo-Soares/studio-bela",
    tags: ["React", "Tailwind CSS", "Lucide Icons"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary-500 font-medium mb-4 block uppercase tracking-widest">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-black rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm card-hover flex flex-col"
            >
              <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Repositório
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
