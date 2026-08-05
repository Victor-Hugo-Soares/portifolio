import React from "react";
import { resolvo } from "@/lib/conteudo";

export default function Resolvo() {
  return (
    <section id="resolvo" className="secao">
      <div className="medida">
        <p className="kicker">o que eu resolvo</p>
        <h2 className="titulo-2 mt-3 max-w-[24ch]">
          Quatro problemas que a IA resolve — nenhum deles era de tecnologia
        </h2>

        <div className="mt-11 grid border-t border-linha md:grid-cols-2">
          {resolvo.map((r, i) => (
            <article
              key={r.titulo}
              className="revelar border-b border-linha py-7 md:py-8"
              style={{ ["--atraso" as string]: `${i * 60}ms` }}
            >
              <div className={i % 2 === 0 ? "md:pr-10" : "md:border-l md:border-linha md:pl-10"}>
                <h3 className="titulo-3 text-[20px] lg:text-[23px]">{r.titulo}</h3>
                <p className="corpo mt-2">{r.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
