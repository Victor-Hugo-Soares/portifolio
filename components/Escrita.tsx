import React from "react";
import { ArrowUpRight } from "lucide-react";
import { perfil } from "@/lib/conteudo";

const temas = [
  "Trocar o modelo de IA em uma tarde — e por que isso é decisão de arquitetura, não de código",
  "Quando NÃO usar IA: problema com regra clara não precisa de modelo",
  "Custo por operação como requisito, não como surpresa no fim do mês",
];

export default function Escrita() {
  return (
    <section id="escrita" className="secao">
      <div className="medida">
        <p className="kicker">escrita</p>
        <h2 className="titulo-2 mt-3 max-w-[26ch]">
          Escrevo sobre IA que foi para produção
        </h2>
        <p className="corpo mt-5 max-w-leitura">
          Publico com frequência sobre o que funcionou, o que quebrou e o que aprendi — sem hype
          e sem promessa. Alguns dos temas:
        </p>

        <ul className="mt-9 border-t border-linha">
          {temas.map((t) => (
            <li key={t} className="border-b border-linha py-5">
              <p className="font-display text-[17.5px] leading-[1.45]">{t}</p>
            </li>
          ))}
        </ul>

        <a
          href={perfil.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secundario mt-9"
        >
          Acompanhar no LinkedIn
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
