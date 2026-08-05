import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { perfil } from "@/lib/conteudo";

export default function Contact() {
  return (
    <section id="contato" className="secao bg-papel-fundo">
      <div className="medida">
        <p className="kicker">contato</p>
        <h2 className="titulo-2 mt-3 max-w-[24ch]">
          Se você tem um processo caro e manual, temos assunto
        </h2>
        <p className="corpo mt-5 max-w-leitura">
          Estou aberto a conversar sobre posições de Inteligência Artificial e inovação, e sobre
          projetos em que a IA precisa sair do experimento e entrar em produção.
        </p>

        <div className="mt-11 grid gap-px border-t border-linha sm:grid-cols-3">
          <a
            href={`mailto:${perfil.email}`}
            className="group flex items-center gap-3 border-b border-linha py-6 sm:border-b-0 sm:pr-6"
          >
            <Mail size={19} className="shrink-0 text-acento" />
            <span className="font-display text-[16px] group-hover:text-acento">
              {perfil.email}
            </span>
          </a>
          <a
            href={perfil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-b border-linha py-6 sm:border-b-0 sm:border-l sm:border-linha sm:px-6"
          >
            <Linkedin size={19} className="shrink-0 text-acento" />
            <span className="font-display text-[16px] group-hover:text-acento">
              /in/victorhugolins
            </span>
          </a>
          <a
            href={perfil.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 py-6 sm:border-l sm:border-linha sm:pl-6"
          >
            <Github size={19} className="shrink-0 text-acento" />
            <span className="font-display text-[16px] group-hover:text-acento">GitHub</span>
          </a>
        </div>

        <p className="corpo mt-8 flex items-center gap-2 text-[15px]">
          <MapPin size={16} className="text-grafite" />
          {perfil.local} · disponível para remoto e híbrido
        </p>
      </div>
    </section>
  );
}
