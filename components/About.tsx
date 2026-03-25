"use client";

import React from "react";
import { User, Code2, Rocket, BrainCircuit } from "lucide-react";

const infoCards = [
  {
    icon: <Code2 className="text-blue-500" size={24} />,
    title: "Experiência",
    description: "Sistemas logísticos e soluções escaláveis.",
  },
  {
    icon: <Rocket className="text-green-500" size={24} />,
    title: "Foco",
    description: "Automações, integrações via APIs e Webhooks.",
  },
  {
    icon: <BrainCircuit className="text-purple-500" size={24} />,
    title: "IA",
    description: "Implementação de agentes inteligentes.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="flex items-center gap-2 text-primary-500 font-medium mb-4">
            <User size={18} />
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem sou eu?</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="mb-6">
              Desenvolvedor Fullstack focado em automações, integrações via APIs/Webhooks e implementação de agentes de IA. 
              Experiência prática na criação de sistemas logísticos e soluções escaláveis.
            </p>
            <p className="mb-6">
              Perfil técnico com forte curiosidade e disciplina para testar e documentar soluções. 
              Sou apaixonado por criar interfaces inteligentes e integrações que resolvem problemas reais.
            </p>
            <p>
              Busco constantemente novas tecnologias e desafios que permitam aplicar meu conhecimento 
              técnico para otimizar processos e melhorar a eficiência operacional através do código.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-black shadow-sm border border-gray-100 dark:border-gray-800 card-hover"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
