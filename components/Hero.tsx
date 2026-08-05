"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { perfil, metricas } from "@/lib/conteudo";

function formatar(v: number, m: (typeof metricas)[number]) {
  const n = m.decimais ? v.toFixed(m.decimais).replace(".", ",") : Math.round(v).toString();
  return `${m.prefixo ?? ""}${n}${m.sufixo ?? ""}`;
}

export default function Hero() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // sem movimento: tudo já visível, nada anima
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-revelar], .metrica-valor", { opacity: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from("[data-revelar]", {
          yPercent: 108,
          duration: 1.05,
          stagger: 0.09,
        })
          .from(
            "[data-entrar]",
            { opacity: 0, y: 22, duration: 0.8, stagger: 0.1 },
            "-=0.55"
          )
          // contadores: o número sobe até o valor real
          .from(
            ".metrica-bloco",
            { opacity: 0, y: 18, duration: 0.6, stagger: 0.12 },
            "-=0.4"
          );

        metricas.forEach((m, i) => {
          const alvo = raiz.current?.querySelectorAll<HTMLElement>(".metrica-valor")[i];
          if (!alvo) return;
          const obj = { v: 0 };
          tl.to(
            obj,
            {
              v: m.valor,
              duration: 1.25,
              ease: "power2.out",
              onUpdate: () => {
                alvo.textContent = formatar(obj.v, m);
              },
            },
            i === 0 ? "-=0.5" : "<0.12"
          );
        });
      });
    }, raiz);

    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={raiz} className="pt-14 md:pt-20">
      <div className="medida">
        <p className="kicker overflow-hidden">
          <span data-entrar className="inline-block">
            {perfil.cargo}
          </span>
        </p>
        <span data-entrar className="regua mt-3 mb-8 md:mb-10" />

        <h1 className="titulo-1 max-w-[16ch]">
          {perfil.manchete.map((linha, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <span data-revelar className="block">
                {i === 1 ? <span className="text-acento">{linha}</span> : linha}
              </span>
            </span>
          ))}
        </h1>

        <p data-entrar className="lead mt-7 max-w-[44ch]">
          {perfil.lead}
        </p>
        <p data-entrar className="corpo mt-4 max-w-[52ch]">
          {perfil.sub}
        </p>

        <div data-entrar className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#casos" className="btn-primario">
            Ver os casos
            <ArrowRight size={17} />
          </a>
          <a href="#contato" className="btn-secundario">
            Falar comigo
          </a>
          <a
            href={perfil.curriculo}
            className="font-sans text-[15px] text-grafite underline decoration-linha-forte underline-offset-4 transition-colors hover:text-acento"
          >
            currículo
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-1 border-y border-linha sm:grid-cols-3">
          {metricas.map((m, i) => (
            <div
              key={m.rotulo}
              className={`metrica-bloco py-6 sm:px-6 ${
                i === 0 ? "sm:pl-0" : "border-t border-linha sm:border-l sm:border-t-0"
              }`}
            >
              <dt className="metrica-valor font-display text-[32px] font-bold leading-none tracking-[-0.02em] lg:text-[40px]">
                {formatar(m.valor, m)}
              </dt>
              <dd className="corpo mt-2 text-[14.5px] leading-snug">{m.rotulo}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
