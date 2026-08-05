import React from "react";
import { competencias } from "@/lib/conteudo";

export default function Competencias() {
  return (
    <section id="competencias" className="secao bg-papel-fundo">
      <div className="medida">
        <p className="kicker">competências</p>
        <h2 className="titulo-2 mt-3 max-w-[22ch]">O que uso para levar isso ao ar</h2>

        <div className="mt-10 grid gap-8 border-t border-linha pt-9 sm:grid-cols-2 lg:grid-cols-4">
          {competencias.map((c, i) => (
            <div key={c.grupo} className="revelar" style={{ ["--atraso" as string]: `${i * 70}ms` }}>
              <h3 className="font-display text-[18px] font-bold text-acento">{c.grupo}</h3>
              <ul className="mt-3 space-y-1.5">
                {c.itens.map((it) => (
                  <li key={it} className="corpo text-[15px]">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
