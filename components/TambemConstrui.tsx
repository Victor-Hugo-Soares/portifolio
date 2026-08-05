import React from "react";
import { ArrowUpRight } from "lucide-react";
import { tambemConstrui } from "@/lib/conteudo";

export default function TambemConstrui() {
  return (
    <section id="tambem" className="secao">
      <div className="medida">
        <p className="kicker">também construí</p>
        <h2 className="titulo-2 mt-3 max-w-[26ch]">Produto e web, antes e ao lado da IA</h2>
        <p className="corpo mt-5 max-w-leitura">
          Sistemas e sites que entreguei de ponta a ponta. Todos clicáveis — os que estão no ar
          abrem direto.
        </p>

        <ul className="mt-11 border-t border-linha">
          {tambemConstrui.map((p, i) => (
            <li key={p.nome} className="revelar border-b border-linha" style={{ ["--atraso" as string]: `${i * 45}ms` }}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-5 transition-colors hover:bg-papel-claro sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="flex items-baseline gap-2">
                  <span className="font-display text-[18px] font-bold group-hover:text-acento">
                    {p.nome}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-linha-forte group-hover:text-acento"
                  />
                </span>
                <span className="corpo flex-1 text-[15.5px] sm:px-6">{p.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
