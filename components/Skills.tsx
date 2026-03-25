"use client";

import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaFigma
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiGraphql, SiPrisma, 
  SiPostgresql, SiFastapi, SiFramer, SiStorybook, SiJest, SiTestinglibrary 
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Styled Components", icon: <SiStyledcomponents className="text-[#DB7093]" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
  { name: "Prisma", icon: <SiPrisma className="dark:text-white text-black" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-[#05998B]" /> },
  { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
  { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: "Storybook", icon: <SiStorybook className="text-[#FF4785]" /> },
  { name: "Jest", icon: <SiJest className="text-[#C21325]" /> },
  { name: "Testing Library", icon: <SiTestinglibrary className="text-[#E33332]" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary-500 font-medium mb-4 block uppercase tracking-widest">Stack Tecnológica</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 card-hover group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary-500 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
